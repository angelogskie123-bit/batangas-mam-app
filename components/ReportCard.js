import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { formatDate, getStatusColor, getStatusIcon } from '../utils/helpers';
import { styles } from './styles/ReportCard.styles';

export default function ReportCard({ 
  report, 
  onPress 
}) {
  return (
    <TouchableOpacity 
      style={styles.reportCard} 
      onPress={() => onPress?.(report)}
      activeOpacity={0.7}
    >
      <View style={styles.reportHeader}>
        <View style={styles.reportTitleRow}>
          <Text style={styles.disasterType}>{report.disaster_type}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(report.status || 'pending') }]}>
            <Text style={styles.statusIcon}>{getStatusIcon(report.status || 'pending')}</Text>
            <Text style={styles.statusText}>{report.status || 'Pending'}</Text>
          </View>
        </View>
        <Text style={styles.reportDate}>{formatDate(report.created_at)}</Text>
      </View>

      {report.description && (
        <Text style={styles.reportDescription} numberOfLines={2}>
          {report.description}
        </Text>
      )}

      <View style={styles.reportLocation}>
        <Text style={styles.locationIcon}>📍</Text>
        <Text style={styles.locationText} numberOfLines={1}>
          {report.address || 'Location not specified'}
        </Text>
      </View>

      {report.photo_urls && report.photo_urls.length > 0 && (
        <View style={styles.photoIndicator}>
          <Text style={styles.photoIcon}>📷</Text>
          <Text style={styles.photoCount}>{report.photo_urls.length} photo(s)</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}
