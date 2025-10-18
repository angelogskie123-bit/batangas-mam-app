import React from 'react';
import { View, StyleSheet } from 'react-native';
import { colors } from '../theme';

// Screen wrapper component to handle custom tab bar spacing
export default function ScreenWrapper({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingBottom: 90, // Space for custom tab bar
  },
});
