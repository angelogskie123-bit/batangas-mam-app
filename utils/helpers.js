import { colors } from '../theme';

// Date formatting utility
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Status utilities for reports
export const getStatusColor = (status) => {
  switch (status) {
    case 'pending':
      return colors.accent;
    case 'in_progress':
      return colors.primary;
    case 'resolved':
      return colors.secondary;
    default:
      return colors.muted;
  }
};

export const getStatusIcon = (status) => {
  switch (status) {
    case 'pending':
      return '⏳';
    case 'in_progress':
      return '🔄';
    case 'resolved':
      return '✅';
    default:
      return '📋';
  }
};

// Priority utilities for announcements
export const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return colors.destructive;
    case 'medium':
      return colors.accent;
    case 'low':
      return colors.secondary;
    default:
      return colors.muted;
  }
};

export const getTypeIcon = (type) => {
  switch (type) {
    case 'weather':
      return '🌦️';
    case 'infrastructure':
      return '🚧';
    case 'event':
      return '📅';
    case 'utility':
      return '💧';
    case 'health':
      return '🏥';
    default:
      return '📢';
  }
};

// Validation utilities
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhoneNumber = (phone) => {
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
};

// String utilities
export const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
};

export const capitalizeFirst = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
