import { supabase, hasSupabase } from '../lib/supabase';
import Constants from 'expo-constants';
import { MOCK_ANNOUNCEMENTS, REFRESH_TIMEOUT } from '../constants/data';

// Reports service
export const ReportsService = {
  async fetchUserReports(username) {
    if (!hasSupabase() || !username) {
      return [];
    }

    try {
      const { data: sessionData } = await supabase.auth.getSession();
      const accessToken = sessionData?.session?.access_token;

      if (!accessToken) {
        return [];
      }

      const { data, error } = await supabase
        .from('reports')
        .select('*')
        .eq('created_by', username)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching reports:', error);
      throw new Error('Failed to load report history');
    }
  },

  async submitReport(reportData) {
    if (!hasSupabase()) {
      throw new Error('Database not configured');
    }

    const { data: sessionData } = await supabase.auth.getSession();
    const accessToken = sessionData?.session?.access_token;
    const userId = sessionData?.session?.user?.id || 'anon';

    if (!accessToken) {
      throw new Error('Please sign in to submit a report');
    }

    const { error } = await supabase.from('reports').insert({
      created_by: reportData.username || null,
      disaster_type: reportData.disasterType,
      description: reportData.description?.trim() || null,
      address: reportData.address.trim(),
      latitude: reportData.coords?.latitude || null,
      longitude: reportData.coords?.longitude || null,
      photo_urls: reportData.photoUrls,
    });

    if (error) throw error;
    return true;
  },
};

// Announcements service
export const AnnouncementsService = {
  async fetchAnnouncements() {
    // Mock implementation - replace with real API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(MOCK_ANNOUNCEMENTS);
      }, REFRESH_TIMEOUT);
    });
  },

  async fetchAnnouncementById(id) {
    // Mock implementation
    return new Promise((resolve) => {
      setTimeout(() => {
        const announcement = MOCK_ANNOUNCEMENTS.find(a => a.id === id);
        resolve(announcement || null);
      }, REFRESH_TIMEOUT);
    });
  },
};

// Contacts service
export const ContactsService = {
  async fetchEmergencyContacts() {
    // In a real app, this might come from an API
    // For now, we'll use the static data
    return Promise.resolve([]);
  },
};

// Auth service
export const AuthService = {
  async signIn(email, password) {
    if (!hasSupabase()) {
      throw new Error('Authentication not configured');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) throw error;
    return data;
  },

  async signUp(email, password, username) {
    if (!hasSupabase()) {
      throw new Error('Authentication not configured');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
        },
      },
    });

    if (error) throw error;
    return data;
  },

  async signOut() {
    if (!hasSupabase()) {
      return;
    }

    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    if (!hasSupabase()) {
      return null;
    }

    const { data: { user } } = await supabase.auth.getUser();
    return user;
  },
};
