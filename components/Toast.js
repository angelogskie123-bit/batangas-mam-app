import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated, Dimensions } from 'react-native';
import { colors, radii, spacing } from '../theme';

const { width } = Dimensions.get('window');

export default function Toast({ visible, message, type = 'info', onDismiss }) {
  const translateY = useRef(new Animated.Value(-100)).current; // for slide-down
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (visible) {
      // Slide in
      Animated.parallel([
        Animated.timing(translateY, {
          toValue: 0,
          duration: 250,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 250,
          useNativeDriver: true,
        }),
      ]).start();

      const timer = setTimeout(() => {
        Animated.parallel([
          Animated.timing(translateY, {
            toValue: -100,
            duration: 250,
            useNativeDriver: true,
          }),
          Animated.timing(opacity, {
            toValue: 0,
            duration: 250,
            useNativeDriver: true,
          }),
        ]).start(() => {
          onDismiss?.();
        });
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, [visible]);

  if (!visible) return null;

  const background =
    type === 'error'
      ? '#e53935'
      : type === 'success'
      ? colors.secondary
      : type === 'warning'
      ? '#fbc02d'
      : colors.primary;

  return (
    <Animated.View
      style={[
        styles.container,
        {
          backgroundColor: background,
          opacity,
          transform: [{ translateY }],
        },
      ]}
    >
      <Text style={styles.text}>{message}</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50, // 👈 pinned to top
    alignSelf: 'center',
    width: width * 0.9,
    borderRadius: 50,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 3,
    zIndex: 9999,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});



