import { StyleSheet, Dimensions } from 'react-native';
import { colors, typography, spacing } from '../../../theme';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    zIndex: 1000,
  },
  curvedBackground: {
    flex: 1,
    backgroundColor: colors.card,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    shadowColor: colors.foreground,
    shadowOffset: {
      width: 0,
      height: -5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 15,
    // Gradient effect simulation
    borderTopWidth: 2,
    borderTopColor: colors.primary,
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
    paddingVertical: spacing.xs,
    paddingHorizontal: spacing.sm,
    borderRadius: 12,
    marginHorizontal: 1,
    minWidth: 60,
    flex: 1,
  },
  activeTabItem: {
    backgroundColor: colors.primary,
    transform: [{ translateY: -8 }],
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
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
    fontSize: 10,
    color: colors.foreground,
    opacity: 0.8,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 2,
  },
  activeTabLabel: {
    color: colors.card,
    opacity: 1,
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
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.card,
    borderWidth: 3,
    borderColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: colors.foreground,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 12,
  },
  activeFloatingButton: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    transform: [{ scale: 1.05 }],
  },
  floatingIconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  floatingButtonLabel: {
    position: 'absolute',
    bottom: -18,
    fontSize: 9,
    color: colors.foreground,
    fontWeight: '600',
    textAlign: 'center',
    width: 60,
  },
  activeFloatingButtonLabel: {
    color: colors.primary,
    fontWeight: '700',
  },
});
