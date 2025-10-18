import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { formatDate, getPriorityColor, getTypeIcon } from '../utils/helpers';
import { styles } from './styles/AnnouncementCard.styles';

export default function AnnouncementCard({ 
  announcement, 
  onPress 
}) {
  return (
    <TouchableOpacity 
      style={styles.announcementCard} 
      onPress={() => onPress?.(announcement)}
      activeOpacity={0.7}
    >
      <View style={styles.announcementHeader}>
        <View style={styles.titleRow}>
          <Text style={styles.typeIcon}>{getTypeIcon(announcement.type)}</Text>
          <Text style={styles.announcementTitle} numberOfLines={2}>
            {announcement.title}
          </Text>
        </View>
        <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(announcement.priority) }]}>
          <Text style={styles.priorityText}>{announcement.priority.toUpperCase()}</Text>
        </View>
      </View>

      <Text style={styles.announcementContent} numberOfLines={3}>
        {announcement.content}
      </Text>

      <View style={styles.announcementFooter}>
        <Text style={styles.announcementDate}>{formatDate(announcement.date)}</Text>
        <Text style={styles.announcementAuthor}>{announcement.author}</Text>
      </View>
    </TouchableOpacity>
  );
}
