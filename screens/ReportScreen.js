import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  FlatList
} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import { decode as decodeBase64 } from 'base64-arraybuffer';
import * as Location from 'expo-location';
import Constants from 'expo-constants';
import MapView, { Marker } from 'react-native-maps';
import { colors } from '../theme';
import { supabase, hasSupabase } from '../lib/supabase';
import { ReportsService } from '../services/api';
import { DISASTER_TYPES, APP_CONFIG, SUCCESS_MESSAGES } from '../constants/data';
import { styles } from '../styles/ReportScreen.styles';

export default function ReportScreen({ onLogout, username, showToast }) {
  const [description, setDescription] = useState('');
  const [disasterType, setDisasterType] = useState('');
  const [customDisaster, setCustomDisaster] = useState('');
  const [address, setAddress] = useState('');
  const [coords, setCoords] = useState(null);
  const [photos, setPhotos] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const disasterOptions = DISASTER_TYPES;

  const takePhoto = async () => {
    if (photos.length >= APP_CONFIG.MAX_PHOTOS_PER_REPORT) {
      showToast && showToast(`You can upload up to ${APP_CONFIG.MAX_PHOTOS_PER_REPORT} photos only.`, 'warning');
      return;
    }

    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      showToast && showToast('Camera permission is required.', 'warning');
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: APP_CONFIG.PHOTO_QUALITY
    });

    if (!result.canceled && result.assets?.length) {
      setPhotos([...photos, result.assets[0]]);
    }
  };

  const removePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  const getLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      showToast && showToast('Location permission is required.', 'warning');
      return;
    }

    const location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    setCoords({ latitude, longitude });

    try {
      const [reverseGeocode] = await Location.reverseGeocodeAsync({
        latitude,
        longitude
      });

      const readableAddress = `${reverseGeocode.name || ''}, ${reverseGeocode.street || ''}, ${reverseGeocode.city || ''}, ${reverseGeocode.region || ''}, ${reverseGeocode.country || ''}`;
      setAddress(readableAddress.trim());
    } catch {
      showToast && showToast('Failed to get readable address.', 'warning');
    }
  };

  const handleSubmit = async () => {
    if (submitting) return;
  
    // Determine final disaster type
    const finalDisasterType =
      disasterType === 'Other' ? customDisaster.trim() : disasterType;
  
    // Validation
    if (!finalDisasterType) {
      showToast?.('Please select a disaster type.', 'warning');
      return;
    }
  
    if (!address.trim()) {
      showToast?.('Please include an address.', 'warning');
      return;
    }
  
    if (photos.length === 0) {
      showToast?.('Please include at least one photo.', 'warning');
      return;
    }
  
    setSubmitting(true);
  
    try {
      const uploadedUrls = [];
  
      // Upload photos
      if (hasSupabase()) {
        const { SUPABASE_URL = '', SUPABASE_ANON_KEY = '' } = Constants.expoConfig?.extra ?? {};
        const { data: sessionData } = await supabase.auth.getSession();
        const accessToken = sessionData?.session?.access_token || null;
        const userId = sessionData?.session?.user?.id || 'anon';

        if (!accessToken) {
          showToast?.('Please sign in to submit a report.', 'warning');
          setSubmitting(false);
          return;
        }
        for (const p of photos) {
          if (!p?.uri) continue;
          const ext = p.uri.split('.').pop() || 'jpg';
          const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${ext}`;
          let publicUrl = null;

          try {
            // Preferred: upload via SDK with binary buffer
            const base64 = await FileSystem.readAsStringAsync(p.uri, { encoding: FileSystem.EncodingType.Base64 });
            const fileBuffer = decodeBase64(base64);
            const { error: uploadError } = await supabase.storage
              .from('reports')
              .upload(`${userId}/${fileName}`, fileBuffer, { contentType: 'image/jpeg', upsert: false });
            if (uploadError) throw uploadError;
            const { data } = supabase.storage.from('reports').getPublicUrl(`${userId}/${fileName}`);
            publicUrl = data?.publicUrl || null;
          } catch (e) {
            // Fallback: log detailed error
            console.warn('SDK upload failed:', e?.message || e);
            throw e;
          }

          if (publicUrl) uploadedUrls.push(publicUrl);
        }
  
        // Insert report record
        const { error } = await supabase.from('reports').insert({
          created_by: username || null,
          disaster_type: finalDisasterType,
          description: description.trim() || null,
          address: address.trim(),
          latitude: coords?.latitude || null,
          longitude: coords?.longitude || null,
          photo_urls: uploadedUrls,
        });
  
        if (error) throw error;
      }
  
      showToast?.(SUCCESS_MESSAGES.REPORT_SUBMITTED, 'success');
  
      // Reset form
      setDescription('');
      setDisasterType('');
      setCustomDisaster('');
      setAddress('');
      setCoords(null);
      setPhotos([]);
    } catch (err) {
      console.error(err);
      showToast?.(err.message || 'Failed to submit report.', 'error');
    } finally {
      setSubmitting(false);
    }
  };  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Welcome, {username || 'User'}</Text>
      <View style={styles.card}>

        {/* Custom Dropdown */}
        <TouchableOpacity
          style={[styles.input, { flexDirection: 'row', justifyContent: 'space-between' }]}
          onPress={() => setModalVisible(true)}
        >
          <Text style={{ color: disasterType ? colors.foreground : '#999' }}>
            {disasterType || 'Select Disaster Type'}
          </Text>
          <Text style={{ color: colors.foreground }}>▼</Text>
        </TouchableOpacity>

        {/* Modal Dropdown */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)'
            }}
          >
            <View
              style={{
                margin: 20,
                backgroundColor: '#fff',
                borderRadius: 12,
                padding: 20
              }}
            >
              <Text style={{ fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
                Select Disaster Type
              </Text>
              <FlatList
                data={disasterOptions}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      paddingVertical: 10,
                      borderBottomWidth: 1,
                      borderBottomColor: '#eee'
                    }}
                    onPress={() => {
                      setDisasterType(item);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={{ fontSize: 16 }}>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <Pressable
                onPress={() => setModalVisible(false)}
                style={[styles.button, { marginTop: 10 }]}
              >
                <Text style={styles.buttonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>

        {/* Show input when "Other" is selected */}
        {disasterType === 'Other' && (
          <TextInput
            style={styles.input}
            placeholder="Specify disaster type"
            placeholderTextColor={colors.foreground + '99'}
            value={customDisaster}
            onChangeText={setCustomDisaster}
          />
        )}

        <TextInput
          style={[styles.input, styles.multiline]}
          placeholder="Description"
          placeholderTextColor={colors.foreground + '99'}
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <Pressable onPress={getLocation} style={styles.outlineBtn}>
          <Text style={styles.outlineBtnText}>Get Location</Text>
        </Pressable>

        {address ? (
          <View style={{ marginVertical: 10 }}>
            <Text style={{ color: colors.foreground, fontSize: 14 }}>📍 {address}</Text>
          </View>
        ) : null}

        {coords && (
          <View
            style={{
              height: 200,
              borderRadius: 12,
              overflow: 'hidden',
              marginVertical: 10
            }}
          >
            <MapView
              style={{ flex: 1 }}
              initialRegion={{
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
              }}
            >
              <Marker coordinate={coords} title="Your Location" />
            </MapView>
          </View>
        )}

        <View style={styles.previewGrid}>
          {photos.map((p, i) => (
            <View key={i} style={styles.previewItem}>
              <Image source={{ uri: p.uri }} style={styles.preview} />
              <Pressable onPress={() => removePhoto(i)} style={styles.removeThumb}>
                <Text style={styles.removeThumbText}>Remove</Text>
              </Pressable>
            </View>
          ))}
        </View>

        {photos.length < APP_CONFIG.MAX_PHOTOS_PER_REPORT && (
          <Pressable onPress={takePhoto} style={styles.outlineBtn}>
            <Text style={styles.outlineBtnText}>Take a photo ({photos.length}/{APP_CONFIG.MAX_PHOTOS_PER_REPORT})</Text>
          </Pressable>
        )}

        <Pressable
          onPress={handleSubmit}
          style={({ pressed }) => [styles.button, pressed && { opacity: 0.9 }]}
        >
          <Text style={styles.buttonText}>
            {submitting ? 'Submitting…' : 'Submit Report'}
          </Text>
        </Pressable>

        <Pressable onPress={onLogout} style={styles.logoutBtn}>
          <Text style={styles.logoutText}>Log Out</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
