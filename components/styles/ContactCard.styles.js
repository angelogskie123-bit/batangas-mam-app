import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../../theme';

export const styles = StyleSheet.create({
  contactCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  contactLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  contactIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: spacing.md,
  },
  contactIconText: {
    fontSize: 24,
  },
  contactInfo: {
    flex: 1,
  },
  contactName: {
    fontSize: typography.subtitle,
    fontWeight: '600',
    color: colors.foreground,
    marginBottom: 2,
  },
  contactDescription: {
    fontSize: typography.small,
    color: colors.foreground,
    opacity: 0.7,
    marginBottom: 2,
  },
  contactNumber: {
    fontSize: typography.body,
    fontWeight: '500',
    color: colors.primary,
  },
  callButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  callButtonText: {
    fontSize: 20,
  },
});
