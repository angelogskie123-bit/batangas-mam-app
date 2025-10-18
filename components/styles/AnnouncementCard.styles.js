import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

export const styles = StyleSheet.create({
  announcementCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.md,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  announcementHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: spacing.sm,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: spacing.sm,
  },
  typeIcon: {
    fontSize: 20,
    marginRight: spacing.sm,
  },
  announcementTitle: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    flex: 1,
  },
  priorityBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 8,
  },
  priorityText: {
    fontSize: typography.small,
    color: colors.card,
    fontWeight: '600',
  },
  announcementContent: {
    fontSize: typography.body,
    color: colors.foreground,
    opacity: 0.8,
    lineHeight: 20,
    marginBottom: spacing.sm,
  },
  announcementFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  announcementDate: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.6,
  },
  announcementAuthor: {
    fontSize: typography.small,
    color: colors.primary,
    fontWeight: '500',
  },
});
