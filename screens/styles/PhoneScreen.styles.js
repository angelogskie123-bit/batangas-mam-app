import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
  },
  title: {
    fontSize: typography.title,
    fontWeight: 'bold',
    color: colors.foreground,
    marginBottom: spacing.xs,
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.foreground,
    opacity: 0.7,
  },
  noticeCard: {
    backgroundColor: colors.muted,
    marginHorizontal: spacing.xl,
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  noticeIcon: {
    fontSize: 24,
    marginRight: spacing.sm,
  },
  noticeText: {
    flex: 1,
    fontSize: typography.small,
    color: colors.foreground,
    lineHeight: 20,
  },
  contactsContainer: {
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  infoCard: {
    backgroundColor: colors.card,
    marginHorizontal: spacing.xl,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoTitle: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: spacing.sm,
  },
  infoText: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.8,
    lineHeight: 20,
  },
  footer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    alignItems: 'center',
  },
  footerText: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.6,
    textAlign: 'center',
  },
});
