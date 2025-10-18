import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing } from '../theme';

export default function AppHeader({ title, onNotificationPress, onProfilePress, notificationCount = 0 }) {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>{title}</Text>
      </View>
      
      <View style={styles.rightSection}>
        {/* Notification Button */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onNotificationPress}
          activeOpacity={0.7}
        >
          <Ionicons name="notifications-outline" size={24} color={colors.foreground} />
          {notificationCount > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>
                {notificationCount > 99 ? '99+' : notificationCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>

        {/* Profile Button */}
        <TouchableOpacity
          style={styles.iconButton}
          onPress={onProfilePress}
          activeOpacity={0.7}
        >
          <Ionicons name="person-circle-outline" size={24} color={colors.foreground} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    backgroundColor: colors.card,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  leftSection: {
    flex: 1,
  },
  title: {
    fontSize: typography.large,
    fontWeight: 'bold',
    color: colors.foreground,
  },
  rightSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  iconButton: {
    padding: spacing.sm,
    borderRadius: spacing.sm,
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: colors.destructive,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.card,
    fontSize: 10,
    fontWeight: 'bold',
  },
});
