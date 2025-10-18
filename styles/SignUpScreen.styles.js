import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography } from '../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radii.md,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 2
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: spacing.md,
    color: colors.foreground
  },
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    marginBottom: spacing.md,
    backgroundColor: '#fff',
    color: colors.foreground
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.sm,
    borderRadius: radii.md,
    alignItems: 'center',
    marginTop: spacing.sm
  },
  buttonText: {
    color: colors.primaryForeground,
    fontWeight: '600'
  },
  linkWrap: {
    marginTop: spacing.md,
    alignItems: 'center'
  },
  link: {
    color: colors.secondary,
    fontWeight: '600'
  }
});




