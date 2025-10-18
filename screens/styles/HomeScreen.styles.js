import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing } from '../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    paddingBottom: spacing.lg,
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: typography.body,
    color: colors.foreground,
    opacity: 0.8,
  },
  appTitle: {
    fontSize: typography.title + 8,
    fontWeight: 'bold',
    color: colors.primary,
    marginVertical: spacing.xs,
  },
  subtitle: {
    fontSize: typography.subtitle,
    color: colors.foreground,
    opacity: 0.7,
    textAlign: 'center',
  },
  quickActionsContainer: {
    paddingHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: spacing.lg,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  statusCard: {
    backgroundColor: colors.card,
    marginHorizontal: spacing.xl,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statusTitle: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: spacing.sm,
  },
  statusIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  statusDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: spacing.sm,
  },
  statusText: {
    fontSize: typography.body,
    color: colors.foreground,
    fontWeight: '500',
  },
  statusDescription: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.7,
    lineHeight: 20,
  },
  alertCard: {
    backgroundColor: colors.muted,
    marginHorizontal: spacing.xl,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.xl,
    borderLeftWidth: 4,
    borderLeftColor: colors.accent,
  },
  alertTitle: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: spacing.sm,
  },
  alertText: {
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
