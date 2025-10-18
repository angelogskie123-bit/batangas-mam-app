import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import AnnouncementCard from '../components/AnnouncementCard';
import { AnnouncementsService } from '../services/api';
import { colors } from '../theme';
import ScreenWrapper from '../components/ScreenWrapper';
import { styles } from './styles/AnnouncementsScreen.styles';

export default function AnnouncementsScreen() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchAnnouncements = async () => {
    try {
      const data = await AnnouncementsService.fetchAnnouncements();
      setAnnouncements(data);
    } catch (error) {
      console.error('Error fetching announcements:', error);
      Alert.alert('Error', 'Failed to load announcements');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchAnnouncements();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const renderAnnouncementItem = ({ item }) => (
    <AnnouncementCard announcement={item} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>📢</Text>
      <Text style={styles.emptyTitle}>No Announcements</Text>
      <Text style={styles.emptyDescription}>
        There are currently no announcements. Check back later for updates from the city government.
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>City Announcements</Text>
          <Text style={styles.subtitle}>Important updates from Batangas City</Text>
        </View>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading announcements...</Text>
        </View>
      </View>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>City Announcements</Text>
        <Text style={styles.subtitle}>Important updates from Batangas City</Text>
      </View>

      {/* Priority Legend */}
      <View style={styles.legendContainer}>
        <Text style={styles.legendTitle}>Priority Levels:</Text>
        <View style={styles.legendRow}>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.destructive }]} />
            <Text style={styles.legendText}>High</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.accent }]} />
            <Text style={styles.legendText}>Medium</Text>
          </View>
          <View style={styles.legendItem}>
            <View style={[styles.legendDot, { backgroundColor: colors.secondary }]} />
            <Text style={styles.legendText}>Low</Text>
          </View>
        </View>
      </View>

      {/* Announcements List */}
      <FlatList
        data={announcements}
        renderItem={renderAnnouncementItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={renderEmptyState}
      />

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Pull down to refresh • Stay informed about city updates
        </Text>
      </View>
      </View>
    </ScreenWrapper>
  );
}

