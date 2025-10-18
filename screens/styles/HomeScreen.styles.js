import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, radii, shadows } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.lg,
    paddingBottom: spacing.md,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: typography.small,
    color: colors.mutedForeground,
    letterSpacing: 0.5,
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  appTitle: {
    fontSize: typography.display,
    fontWeight: '700',
    color: colors.foreground,
    marginTop: spacing.xs,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: typography.body,
    color: colors.mutedForeground,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  quickActionsContainer: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.lg,
    marginBottom: spacing.md,
  },
  sectionTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.foreground,
    marginBottom: spacing.md,
    letterSpacing: -0.3,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  statusCard: {
    backgroundColor: colors.card,
    marginHorizontal: spacing.lg,
    borderRadius: radii.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md,
  },
  statusTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.foreground,
    marginBottom: spacing.md,
    letterSpacing: -0.3,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.md,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    backgroundColor: colors.muted,
    borderRadius: radii.full,
    alignSelf: 'flex-start',
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: radii.full,
    marginRight: spacing.sm,
  },
  statusText: {
    fontSize: typography.small,
    color: colors.foreground,
    fontWeight: '600',
  },
  statusDescription: {
    fontSize: typography.small,
    color: colors.mutedForeground,
    lineHeight: 21,
  },
  alertCard: {
    backgroundColor: colors.card,
    marginHorizontal: spacing.lg,
    borderRadius: radii.lg,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    borderLeftWidth: 4,
    borderLeftColor: colors.primary,
    ...shadows.sm,
  },
  alertTitle: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    color: colors.foreground,
    marginBottom: spacing.sm,
    letterSpacing: -0.3,
  },
  alertText: {
    fontSize: typography.small,
    color: colors.mutedForeground,
    lineHeight: 21,
  },
  footer: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
    alignItems: 'center',
  },
  footerText: {
    fontSize: typography.tiny,
    color: colors.mutedForeground,
    textAlign: 'center',
  },
});
