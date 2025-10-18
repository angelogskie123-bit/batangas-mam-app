import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

export const styles = StyleSheet.create({
  actionCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.lg,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  disabledCard: {
    opacity: 0.5,
  },
  actionIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  actionIconText: {
    fontSize: 24,
  },
  actionText: {
    fontSize: typography.small,
    color: colors.foreground,
    textAlign: 'center',
    fontWeight: '500',
  },
  disabledText: {
    opacity: 0.6,
  },
});
