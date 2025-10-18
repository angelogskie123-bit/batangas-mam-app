import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from 'react-native';
import { colors, radii, spacing, typography } from '../theme';
import { supabase, hasSupabase } from '../lib/supabase';

export default function LoginScreen({ onLogin, onGoSignUp }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    if (isSubmitting) return;
    if (!username.trim() || !password.trim()) {
      Alert.alert('Missing info', 'Please enter both username and password.');
      return;
    }
    setIsSubmitting(true);
    try {
      if (hasSupabase()) {
        const { error } = await supabase.auth.signInWithPassword({
          email: username.trim(),
          password: password.trim()
        });
        if (error) throw error;
        onLogin({ username });
      } else {
        // Fallback demo auth when Supabase is not configured
        onLogin({ username });
      }
    } catch (err) {
      Alert.alert('Sign in failed', err.message || 'Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>MAM Batangas</Text>
      <View style={styles.card}>
        <Text style={styles.title}>Sign in</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor={colors.foreground + '99'}
          autoCapitalize="none"
          autoCorrect={false}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor={colors.foreground + '99'}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={handleSubmit} style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.9 }
        ]}>
          <Text style={styles.buttonText}>{isSubmitting ? 'Signing in…' : 'Sign In'}</Text>
        </Pressable>
        <Text style={styles.helper}>Use any credentials to continue.</Text>
        <Pressable onPress={onGoSignUp} style={styles.linkWrap}>
          <Text style={styles.link}>Create an account</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.xl,
    justifyContent: 'center',
    backgroundColor: colors.background
  },
  brand: {
    fontSize: typography.display,
    fontWeight: '800',
    color: colors.foreground,
    textAlign: 'center',
    marginBottom: spacing.xs,
    letterSpacing: -1
  },
  title: {
    fontSize: typography.subtitle,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: spacing.xl,
    color: colors.foreground,
    letterSpacing: -0.3
  },
  card: {
    backgroundColor: colors.card,
    borderRadius: radii.xl,
    padding: spacing.xl,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4
  },
  input: {
    borderWidth: 1.5,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.md,
    marginBottom: spacing.md,
    backgroundColor: colors.background,
    color: colors.foreground,
    fontSize: typography.body
  },
  button: {
    backgroundColor: colors.primary,
    paddingVertical: spacing.md,
    borderRadius: radii.md,
    alignItems: 'center',
    marginTop: spacing.sm,
    shadowColor: colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3
  },
  buttonText: {
    color: colors.primaryForeground,
    fontWeight: '700',
    fontSize: typography.body,
    letterSpacing: 0.2
  },
  helper: {
    textAlign: 'center',
    marginTop: spacing.md,
    color: colors.mutedForeground,
    fontSize: typography.small
  },
  linkWrap: {
    marginTop: spacing.lg,
    alignItems: 'center'
  },
  link: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: typography.body
  }
});


