import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  RefreshControl,
  Alert,
} from 'react-native';
import ReportCard from '../components/ReportCard';
import { ReportsService } from '../services/api';
import ScreenWrapper from '../components/ScreenWrapper';
import { styles } from './styles/HistoryScreen.styles';

export default function HistoryScreen({ username }) {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchReports = async () => {
    try {
      const data = await ReportsService.fetchUserReports(username);
      setReports(data);
    } catch (error) {
      console.error('Error fetching reports:', error);
      Alert.alert('Error', 'Failed to load report history');
    } finally {
      setLoading(false);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchReports();
    setRefreshing(false);
  };

  useEffect(() => {
    fetchReports();
  }, [username]);

  const renderReportItem = ({ item }) => (
    <ReportCard report={item} />
  );

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyIcon}>📋</Text>
      <Text style={styles.emptyTitle}>No Reports Yet</Text>
      <Text style={styles.emptyDescription}>
        Your submitted emergency reports will appear here. Start by creating your first report.
      </Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Report History</Text>
          <Text style={styles.subtitle}>Your submitted emergency reports</Text>
        </View>
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Loading reports...</Text>
        </View>
      </View>
    );
  }

  return (
    <ScreenWrapper>
      <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Report History</Text>
        <Text style={styles.subtitle}>Your submitted emergency reports</Text>
      </View>

      {/* Reports List */}
      <FlatList
        data={reports}
        renderItem={renderReportItem}
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
          Pull down to refresh • Reports are automatically saved
        </Text>
      </View>
      </View>
    </ScreenWrapper>
  );
}

