import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

export const styles = StyleSheet.create({
  reportCard: {
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
  reportHeader: {
    marginBottom: spacing.sm,
  },
  reportTitleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  disasterType: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    flex: 1,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: 12,
  },
  statusIcon: {
    fontSize: 12,
    marginRight: 4,
  },
  statusText: {
    fontSize: typography.small,
    color: colors.card,
    fontWeight: '500',
  },
  reportDate: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.6,
  },
  reportDescription: {
    fontSize: typography.body,
    color: colors.foreground,
    opacity: 0.8,
    marginBottom: spacing.sm,
    lineHeight: 20,
  },
  reportLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  locationIcon: {
    fontSize: 14,
    marginRight: spacing.xs,
  },
  locationText: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.7,
    flex: 1,
  },
  photoIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  photoIcon: {
    fontSize: 14,
    marginRight: spacing.xs,
  },
  photoCount: {
    fontSize: typography.small,
    color: colors.primary,
    fontWeight: '500',
  },
});
