import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { colors } from '../theme';
import { styles } from './styles/ActionCard.styles';

export default function ActionCard({ 
  icon, 
  title, 
  onPress, 
  iconColor = colors.primary,
  disabled = false 
}) {
  return (
    <TouchableOpacity 
      style={[styles.actionCard, disabled && styles.disabledCard]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
    >
      <View style={[styles.actionIcon, { backgroundColor: iconColor }]}>
        <Text style={styles.actionIconText}>{icon}</Text>
      </View>
      <Text style={[styles.actionText, disabled && styles.disabledText]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
