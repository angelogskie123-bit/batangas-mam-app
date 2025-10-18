import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme';
import ActionCard from '../components/ActionCard';
import ScreenWrapper from '../components/ScreenWrapper';
import AppHeader from '../components/AppHeader';
import { styles } from './styles/HomeScreen.styles';

export default function HomeScreen() {
  const navigation = useNavigation();
  
  // Handle notification press
  const handleNotificationPress = () => {
    Alert.alert('Notifications', 'You have 3 new notifications');
  };

  // Handle profile press
  const handleProfilePress = () => {
    Alert.alert('Profile', 'Profile settings coming soon!');
  };
  
  return (
    <ScreenWrapper>
      <AppHeader 
        title="Batangas City"
        onNotificationPress={handleNotificationPress}
        onProfilePress={handleProfilePress}
        notificationCount={3}
      />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appTitle}>Batangas City</Text>
        <Text style={styles.subtitle}>Emergency Response System</Text>
      </View>

      {/* Quick Actions Grid */}
      <View style={styles.quickActionsContainer}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <ActionCard
            icon="🚨"
            title="Emergency Report"
            iconColor={colors.destructive}
            onPress={() => navigation.navigate('Report')}
          />
          <ActionCard
            icon="📞"
            title="Emergency Contacts"
            iconColor={colors.primary}
            onPress={() => navigation.navigate('Phone')}
          />
          <ActionCard
            icon="📋"
            title="Report History"
            iconColor={colors.secondary}
            onPress={() => navigation.navigate('History')}
          />
          <ActionCard
            icon="📢"
            title="Announcements"
            iconColor={colors.accent}
            onPress={() => navigation.navigate('Announcements')}
          />
        </View>
      </View>

      {/* Emergency Status Card */}
      <View style={styles.statusCard}>
        <Text style={styles.statusTitle}>Emergency Status</Text>
        <View style={styles.statusIndicator}>
          <View style={[styles.statusDot, { backgroundColor: colors.secondary }]} />
          <Text style={styles.statusText}>All Systems Operational</Text>
        </View>
        <Text style={styles.statusDescription}>
          Emergency services are ready to respond. Stay safe and report any incidents immediately.
        </Text>
      </View>

      {/* Weather/Alert Section */}
      <View style={styles.alertCard}>
        <Text style={styles.alertTitle}>Weather Alert</Text>
        <Text style={styles.alertText}>
          No active weather alerts for Batangas City. Stay informed and prepared.
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          For immediate emergency assistance, call 911
        </Text>
      </View>
      </ScrollView>
    </ScreenWrapper>
  );
}