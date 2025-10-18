import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, Alert } from 'react-native';
import { colors, radii, spacing, typography } from '../theme';
import { supabase, hasSupabase } from '../lib/supabase';
import { styles } from '../styles/SignUpScreen.styles';

export default function SignUpScreen({ onSignedUp, onBack, showToast }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    if (loading) return;
    if (!email.trim() || !password.trim()) {
      showToast && showToast('Please enter email and password.', 'warning');
      return;
    }
    setLoading(true);
    try {
      if (hasSupabase()) {
        const { error } = await supabase.auth.signUp({
          email: email.trim(),
          password: password.trim()
        });
        if (error) throw error;
        showToast && showToast('Check your email for confirmation link.', 'info');
      }
      onSignedUp?.(email.trim());
    } catch (err) {
      showToast && showToast(err.message || 'Sign up failed', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Create an account</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor={colors.foreground + '99'}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.foreground + '99'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={handleSignUp} style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.9 }
        ]}>
          <Text style={styles.buttonText}>{loading ? 'Creating…' : 'Create account'}</Text>
        </Pressable>
        <Pressable onPress={onBack} style={styles.linkWrap}>
          <Text style={styles.link}>Back to sign in</Text>
        </Pressable>
      </View>
    </View>
  );
}

// styles moved to ../styles/SignUpScreen.styles.js


