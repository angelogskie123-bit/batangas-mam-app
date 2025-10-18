import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, radii, shadows } from '../../theme';

const { width } = Dimensions.get('window');
const cardWidth = (width - spacing.lg * 2 - spacing.md) / 2;

export const styles = StyleSheet.create({
  actionCard: {
    backgroundColor: colors.card,
    borderRadius: radii.lg,
    padding: spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    width: cardWidth,
    height: cardWidth,
    borderWidth: 1,
    borderColor: colors.border,
    ...shadows.md,
  },
  disabledCard: {
    opacity: 0.5,
  },
  actionIcon: {
    width: 56,
    height: 56,
    borderRadius: radii.md,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  actionIconText: {
    fontSize: 28,
  },
  actionText: {
    fontSize: typography.small,
    color: colors.foreground,
    textAlign: 'center',
    fontWeight: '600',
    letterSpacing: -0.2,
  },
  disabledText: {
    opacity: 0.6,
  },
});
