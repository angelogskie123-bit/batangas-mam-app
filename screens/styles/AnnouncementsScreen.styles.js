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
  legendContainer: {
    backgroundColor: colors.card,
    marginHorizontal: spacing.xl,
    borderRadius: 12,
    padding: spacing.md,
    marginBottom: spacing.lg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  legendTitle: {
    fontSize: typography.small,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: spacing.xs,
  },
  legendRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginRight: spacing.xs,
  },
  legendText: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.7,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: typography.body,
    color: colors.foreground,
    opacity: 0.7,
  },
  listContainer: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl * 2,
  },
  emptyIcon: {
    fontSize: 64,
    marginBottom: spacing.lg,
  },
  emptyTitle: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: spacing.sm,
  },
  emptyDescription: {
    fontSize: typography.body,
    color: colors.foreground,
    opacity: 0.7,
    textAlign: 'center',
    lineHeight: 20,
    paddingHorizontal: spacing.xl,
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
