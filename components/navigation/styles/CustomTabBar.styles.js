import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing, radii, shadows } from '../../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 85,
    zIndex: 1000,
  },
  curvedBackground: {
    flex: 1,
    backgroundColor: colors.card,
    borderTopLeftRadius: radii.xl,
    borderTopRightRadius: radii.xl,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -8,
    },
    shadowOpacity: 0.12,
    shadowRadius: 24,
    elevation: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Left side tabs (Home, Phone)
  leftTabsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  // Center space for floating button
  centerSpace: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Right side tabs (History, Announcements)
  rightTabsContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.sm,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.md,
    borderRadius: radii.lg,
    marginHorizontal: 2,
    minWidth: 64,
    flex: 1,
  },
  activeTabItem: {
    backgroundColor: colors.primary,
    transform: [{ translateY: -6 }],
    ...shadows.lg,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
    position: 'relative',
  },
  activeIconContainer: {
    transform: [{ scale: 1.1 }],
  },
  tabLabel: {
    fontSize: typography.tiny,
    color: colors.mutedForeground,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
  },
  activeTabLabel: {
    color: colors.card,
    fontWeight: '700',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: colors.destructive,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: colors.card,
    fontSize: 10,
    fontWeight: 'bold',
  },
  // Floating Report Button Styles
  floatingButtonContainer: {
    position: 'absolute',
    top: -25,
    left: '50%',
    marginLeft: -30,
    zIndex: 1000,
    alignItems: 'center',
  },
  floatingButton: {
    width: 64,
    height: 64,
    borderRadius: radii.full,
    backgroundColor: colors.card,
    borderWidth: 4,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.xl,
  },
  activeFloatingButton: {
    backgroundColor: colors.primary,
    borderColor: colors.accent,
    transform: [{ scale: 1.08 }],
  },
  floatingIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  floatingButtonLabel: {
    position: 'absolute',
    bottom: -20,
    fontSize: typography.tiny,
    color: colors.mutedForeground,
    fontWeight: '600',
    textAlign: 'center',
    width: 64,
  },
  activeFloatingButtonLabel: {
    color: colors.primary,
    fontWeight: '700',
  },
});
