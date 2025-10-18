import { StyleSheet } from 'react-native';
import { colors, radii, spacing, typography } from '../theme';

export const styles = StyleSheet.create({
  container: {
    padding: spacing.xl,
    backgroundColor: colors.background,
    flexGrow: 1
  },
  header: {
    textAlign: 'center',
    color: colors.foreground,
    marginBottom: spacing.sm
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
  picker: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    marginBottom: spacing.md,
    backgroundColor: '#fff',
    color: colors.foreground,
    height: 48,
    justifyContent: 'center'
  },
  multiline: {
    minHeight: 120,
    textAlignVertical: 'top'
  },
  previewGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: spacing.md
  },
  previewItem: {
    width: '48%',
    marginBottom: spacing.md
  },
  preview: {
    width: '100%',
    height: 140,
    borderRadius: radii.md
  },
  removeThumb: {
    alignItems: 'center',
    marginTop: spacing.xs
  },
  removeThumbText: {
    color: '#b00020',
    fontWeight: '600'
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
  outlineBtn: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    alignItems: 'center',
    paddingVertical: spacing.sm,
    marginBottom: spacing.md
  },
  outlineBtnText: {
    color: colors.foreground,
    fontWeight: '600'
  },
  logoutBtn: {
    marginTop: spacing.md,
    alignItems: 'center'
  },
  logoutText: {
    color: '#b00020',
    fontWeight: '600'
  }
});


