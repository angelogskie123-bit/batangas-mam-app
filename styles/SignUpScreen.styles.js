import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography, shadows } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing.xl,
    color: colors.foreground,
    letterSpacing: -0.3
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.background,
    color: colors.foreground,
    fontSize: typography.body
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
    alignItems: 'center',
    marginTop: spacing.sm,
    ...shadows.md
  },
  buttonText: {
    color: colors.primaryForeground,
    fontWeight: '700',
    fontSize: typography.body,
    letterSpacing: 0.2
  },
  linkWrap: {
    marginTop: spacing.lg,
    alignItems: 'center'
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: typography.body
  }
});




