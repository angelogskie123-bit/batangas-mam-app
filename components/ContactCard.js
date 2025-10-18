import React from 'react';
import { TouchableOpacity, Text, View, Alert, Linking } from 'react-native';
import { styles } from './styles/ContactCard.styles';

export default function ContactCard({ 
  contact, 
  onCall 
}) {
  const handleCall = () => {
    const phoneNumber = contact.number.replace(/[^\d+]/g, '');
    const url = `tel:${phoneNumber}`;
    
    Alert.alert(
      'Call Emergency Contact',
      `Are you sure you want to call ${contact.name}?\n\n${contact.number}`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Call',
          onPress: () => {
            Linking.openURL(url).catch(() => {
              Alert.alert('Error', 'Unable to make phone call');
            });
          },
        },
      ]
    );
  };

  return (
    <TouchableOpacity
      style={styles.contactCard}
      onPress={handleCall}
      activeOpacity={0.7}
    >
      <View style={styles.contactLeft}>
        <View style={[styles.contactIcon, { backgroundColor: contact.color }]}>
          <Text style={styles.contactIconText}>{contact.icon}</Text>
        </View>
        <View style={styles.contactInfo}>
          <Text style={styles.contactName}>{contact.name}</Text>
          <Text style={styles.contactDescription}>{contact.description}</Text>
          <Text style={styles.contactNumber}>{contact.number}</Text>
        </View>
      </View>
      <View style={styles.callButton}>
        <Text style={styles.callButtonText}>📞</Text>
      </View>
    </TouchableOpacity>
  );
}
