import React from 'react';
import {
  View,
  Text,
  ScrollView,
} from 'react-native';
import ContactCard from '../components/ContactCard';
import { EMERGENCY_CONTACTS } from '../constants/data';
import ScreenWrapper from '../components/ScreenWrapper';
import { styles } from './styles/PhoneScreen.styles';

export default function PhoneScreen() {
  return (
    <ScreenWrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Emergency Contacts</Text>
        <Text style={styles.subtitle}>
          Quick access to emergency services and important contacts
        </Text>
      </View>

      {/* Emergency Notice */}
      <View style={styles.noticeCard}>
        <Text style={styles.noticeIcon}>⚠️</Text>
        <Text style={styles.noticeText}>
          In case of emergency, call 911 immediately. This app provides quick access to emergency contacts for Batangas City.
        </Text>
      </View>

      {/* Contacts List */}
      <View style={styles.contactsContainer}>
        {EMERGENCY_CONTACTS.map((contact) => (
          <ContactCard key={contact.id} contact={contact} />
        ))}
      </View>

      {/* Additional Information */}
      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>Important Information</Text>
        <Text style={styles.infoText}>
          • Always call 911 for life-threatening emergencies{'\n'}
          • Keep your location information ready when calling{'\n'}
          • Stay calm and provide clear information{'\n'}
          • Follow emergency operator instructions
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Emergency services are available 24/7
        </Text>
      </View>
      </ScrollView>
    </ScreenWrapper>
  );
}

