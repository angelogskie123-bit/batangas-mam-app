import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography, shadows } from '../theme';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.lg,
    backgroundColor: colors.background,
    flexGrow: 1
  },
  header: {
    fontSize: typography.title,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.foreground,
    marginBottom: spacing.lg,
    letterSpacing: -0.5
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    padding: spacing.lg,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md
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
  picker: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.md,
    marginBottom: spacing.md,
    backgroundColor: colors.background,
    color: colors.foreground,
    height: 52,
    justifyContent: 'center',
    fontSize: typography.body
  },
  multiline: {
    minHeight: 120,
    textAlignVertical: 'top'
  },
  previewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
    marginBottom: spacing.md
  },
  previewItem: {
    width: '47%',
    marginBottom: spacing.sm
  },
  preview: {
    width: '100%',
    height: 140,
    borderRadius: radii.md,
    borderWidth: 1,
    borderColor: colors.border
  },
  removeThumb: {
    alignItems: 'center',
    marginTop: spacing.sm,
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    backgroundColor: colors.muted,
    borderRadius: radii.sm
  },
  removeThumbText: {
    color: colors.destructive,
    fontWeight: '600',
    fontSize: typography.small
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
    alignItems: 'center',
    marginTop: spacing.md,
    ...shadows.md
  },
  buttonText: {
    color: colors.primaryForeground,
    fontWeight: '700',
    fontSize: typography.body,
    letterSpacing: 0.2
  },
  outlineBtn: {
    borderWidth: 1.5,
    borderColor: colors.primary,
    borderRadius: radii.md,
    alignItems: 'center',
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.card
  },
  outlineBtnText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: typography.body
  },
  logoutBtn: {
    marginTop: spacing.lg,
    alignItems: 'center',
    paddingVertical: spacing.sm
  },
  logoutText: {
    color: colors.destructive,
    fontWeight: '600',
    fontSize: typography.body
  }
});


