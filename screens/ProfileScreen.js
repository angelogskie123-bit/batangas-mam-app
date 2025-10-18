import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { colors } from '../theme';
import ScreenWrapper from '../components/ScreenWrapper';
import { styles } from './styles/ProfileScreen.styles';

export default function ProfileScreen({ username, onLogout }) {
  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: onLogout,
        },
      ]
    );
  };

  const handleEditProfile = () => {
    Alert.alert('Edit Profile', 'Profile editing feature coming soon!');
  };

  const handleChangePassword = () => {
    Alert.alert('Change Password', 'Password change feature coming soon!');
  };

  const handleNotifications = () => {
    Alert.alert('Notifications', 'Notification settings coming soon!');
  };

  const handleHelp = () => {
    Alert.alert('Help & Support', 'Help center coming soon!');
  };

  const handleAbout = () => {
    Alert.alert(
      'About',
      'Batangas City Emergency Response App\nVersion 1.0.0\n\nFor emergency assistance, call 911.'
    );
  };

  return (
    <ScreenWrapper>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.profileIcon}>
          <Text style={styles.profileIconText}>👤</Text>
        </View>
        <Text style={styles.username}>{username || 'User'}</Text>
        <Text style={styles.userEmail}>user@batangascity.gov.ph</Text>
      </View>

      {/* Profile Actions */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Account</Text>
        
        <TouchableOpacity style={styles.menuItem} onPress={handleEditProfile}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.menuIcon}>✏️</Text>
            <Text style={styles.menuText}>Edit Profile</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleChangePassword}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.menuIcon}>🔒</Text>
            <Text style={styles.menuText}>Change Password</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleNotifications}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.menuIcon}>🔔</Text>
            <Text style={styles.menuText}>Notifications</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* App Settings */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>App Settings</Text>
        
        <TouchableOpacity style={styles.menuItem} onPress={handleHelp}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.menuIcon}>❓</Text>
            <Text style={styles.menuText}>Help & Support</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={handleAbout}>
          <View style={styles.menuItemLeft}>
            <Text style={styles.menuIcon}>ℹ️</Text>
            <Text style={styles.menuText}>About</Text>
          </View>
          <Text style={styles.menuArrow}>›</Text>
        </TouchableOpacity>
      </View>

      {/* Emergency Info */}
      <View style={styles.emergencyCard}>
        <Text style={styles.emergencyTitle}>Emergency Information</Text>
        <Text style={styles.emergencyText}>
          In case of emergency, call 911 immediately. This app helps you report incidents and stay informed about city announcements.
        </Text>
        <View style={styles.emergencyContact}>
          <Text style={styles.emergencyContactText}>Emergency Hotline: 911</Text>
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Batangas City Emergency Response System
        </Text>
        <Text style={styles.footerVersion}>Version 1.0.0</Text>
      </View>
      </ScrollView>
    </ScreenWrapper>
  );
}
