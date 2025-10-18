import React from 'react';
import { View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors, typography, spacing } from '../../theme';
import { styles } from './styles/CustomTabBar.styles';

const { width } = Dimensions.get('window');

// Custom curved tab bar component
export default function CustomTabBar({ state, navigation }) {
  // Centralized tab configuration
  const tabConfigs = [
    {
      key: 'Home',
      label: 'Home',
      icon: 'home',
    },
    {
      key: 'Phone',
      label: 'Emergency',
      icon: 'call',
    },
    {
      key: 'Report',
      label: 'Report',
      icon: 'add-circle',
    },
    {
      key: 'History',
      label: 'History',
      icon: 'list',
    },
    {
      key: 'Announcements',
      label: 'News',
      icon: 'megaphone',
    },
  ];

  // Handle tab press
  const handleTabPress = (routeName) => {
    navigation.navigate(routeName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.curvedBackground}>
        {/* Left side tabs */}
        <View style={styles.leftTabsContainer}>
          {state.routes
            .filter(route => ['Home', 'Phone'].includes(route.name))
            .map((route, index) => {
              const isActive = state.index === state.routes.findIndex(r => r.key === route.key);
              const tabConfig = tabConfigs.find(config => config.key === route.name);
              if (!tabConfig) return null;

              return (
                <TouchableOpacity
                  key={route.key}
                  style={[styles.tabItem, isActive && styles.activeTabItem]}
                  onPress={() => handleTabPress(route.name)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.iconContainer, isActive && styles.activeIconContainer]}>
                    <Ionicons
                      name={isActive ? tabConfig.icon : `${tabConfig.icon}-outline`}
                      size={isActive ? 28 : 24}
                      color={isActive ? colors.card : colors.foreground}
                    />
                  </View>
                  <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
                    {tabConfig.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>

        {/* Center space for floating button */}
        <View style={styles.centerSpace} />

        {/* Right side tabs */}
        <View style={styles.rightTabsContainer}>
          {state.routes
            .filter(route => ['History', 'Announcements'].includes(route.name))
            .map((route, index) => {
              const isActive = state.index === state.routes.findIndex(r => r.key === route.key);
              const tabConfig = tabConfigs.find(config => config.key === route.name);
              if (!tabConfig) return null;

              return (
                <TouchableOpacity
                  key={route.key}
                  style={[styles.tabItem, isActive && styles.activeTabItem]}
                  onPress={() => handleTabPress(route.name)}
                  activeOpacity={0.7}
                >
                  <View style={[styles.iconContainer, isActive && styles.activeIconContainer]}>
                    <Ionicons
                      name={isActive ? tabConfig.icon : `${tabConfig.icon}-outline`}
                      size={isActive ? 28 : 24}
                      color={isActive ? colors.card : colors.foreground}
                    />
                  </View>
                  <Text style={[styles.tabLabel, isActive && styles.activeTabLabel]}>
                    {tabConfig.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
        </View>

        {/* Floating Report Button */}
        {(() => {
          const reportRoute = state.routes.find(route => route.name === 'Report');
          if (!reportRoute) return null;
          const isActive = state.index === state.routes.findIndex(r => r.key === reportRoute.key);
          const tabConfig = tabConfigs.find(config => config.key === reportRoute.name);

          return (
            <View key={reportRoute.key} style={styles.floatingButtonContainer}>
              <TouchableOpacity
                style={[
                  styles.floatingButton,
                  isActive && styles.activeFloatingButton,
                ]}
                onPress={() => handleTabPress(reportRoute.name)}
                activeOpacity={0.8}
              >
                <View style={styles.floatingIconContainer}>
                  <Ionicons
                    name={isActive ? tabConfig.icon : `${tabConfig.icon}-outline`}
                    size={32}
                    color={isActive ? colors.card : colors.primary}
                  />
                </View>
              </TouchableOpacity>
              <Text
                style={[
                  styles.floatingButtonLabel,
                  isActive && styles.activeFloatingButtonLabel,
                ]}
              >
                {tabConfig.label}
              </Text>
            </View>
          );
        })()}
      </View>
    </View>
  );
}
