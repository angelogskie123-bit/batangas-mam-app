// Load environment variables from .env.local if present
// This makes SUPABASE_URL and SUPABASE_ANON_KEY available at build time
try {
  require('dotenv').config({ path: '.env.local' })
} catch {}

/** @type {import('@expo/config').ExpoConfig} */
module.exports = {
  name: 'mam-batangas-mobile',
  slug: 'mam-batangas-mobile',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash-icon.png',
    resizeMode: 'contain',
    backgroundColor: '#e8f5e8'
  },
  updates: {
    enabled: true,
    checkAutomatically: 'ON_LOAD'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#e8f5e8'
    }
  },
  web: {
    bundler: 'metro',
    output: 'single'
  },
  extra: {
    SUPABASE_URL: process.env.SUPABASE_URL || '',
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY || ''
  },
  experiments: {
    typedRoutes: false
  }
}


