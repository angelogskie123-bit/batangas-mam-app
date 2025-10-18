// Emergency contacts data
export const EMERGENCY_CONTACTS = [
  {
    id: 1,
    name: 'Emergency Hotline',
    number: '911',
    description: 'General Emergency Services',
    icon: '🚨',
    color: '#e53935',
  },
  {
    id: 2,
    name: 'Fire Department',
    number: '911',
    description: 'Fire Emergency Response',
    icon: '🔥',
    color: '#e53935',
  },
  {
    id: 3,
    name: 'Police Station',
    number: '911',
    description: 'Police Emergency',
    icon: '👮',
    color: '#2e7d32',
  },
  {
    id: 4,
    name: 'Medical Emergency',
    number: '911',
    description: 'Ambulance & Medical',
    icon: '🏥',
    color: '#e53935',
  },
  {
    id: 5,
    name: 'Batangas City Hall',
    number: '(043) 723-1234',
    description: 'City Government Office',
    icon: '🏛️',
    color: '#4caf50',
  },
  {
    id: 6,
    name: 'Disaster Risk Reduction',
    number: '(043) 723-5678',
    description: 'DRRM Office',
    icon: '🌪️',
    color: '#8bc34a',
  },
];

// Mock announcements data
export const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    title: 'Weather Advisory: Heavy Rain Expected',
    content: 'The Philippine Atmospheric, Geophysical and Astronomical Services Administration (PAGASA) has issued a weather advisory for Batangas City. Heavy rainfall is expected from 2:00 PM to 8:00 PM today. Please take necessary precautions and avoid unnecessary travel.',
    type: 'weather',
    priority: 'high',
    date: '2024-01-15T10:30:00Z',
    author: 'City Disaster Risk Reduction Management Office',
  },
  {
    id: 2,
    title: 'Road Closure Notice: Main Street',
    content: 'Main Street will be closed for road maintenance from January 16-18, 2024. Alternative routes are available via Secondary Road and Bypass Road. We apologize for any inconvenience.',
    type: 'infrastructure',
    priority: 'medium',
    date: '2024-01-14T14:00:00Z',
    author: 'City Engineering Office',
  },
  {
    id: 3,
    title: 'Emergency Preparedness Workshop',
    content: 'Join us for a free emergency preparedness workshop on January 20, 2024, at the City Hall Auditorium from 9:00 AM to 12:00 PM. Learn essential skills for disaster preparedness. Registration is required.',
    type: 'event',
    priority: 'low',
    date: '2024-01-13T09:00:00Z',
    author: 'City Social Welfare and Development Office',
  },
  {
    id: 4,
    title: 'Water Service Interruption',
    content: 'Scheduled water service interruption will occur on January 17, 2024, from 6:00 AM to 12:00 PM in Barangays 1-5 for pipeline maintenance. Please store water in advance.',
    type: 'utility',
    priority: 'medium',
    date: '2024-01-12T16:45:00Z',
    author: 'Batangas City Water District',
  },
  {
    id: 5,
    title: 'Community Health Program',
    content: 'Free medical check-up and vaccination drive will be conducted on January 22, 2024, at the City Health Office from 8:00 AM to 4:00 PM. All residents are encouraged to participate.',
    type: 'health',
    priority: 'low',
    date: '2024-01-11T11:20:00Z',
    author: 'City Health Office',
  },
];

// Disaster types for reports
export const DISASTER_TYPES = [
  'Flood',
  'Fire', 
  'Earthquake',
  'Landslide',
  'Typhoon',
  'Other'
];

// App configuration
export const APP_CONFIG = {
  MAX_PHOTOS_PER_REPORT: 3,
  PHOTO_QUALITY: 0.85,
  MAP_DELTA: {
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  },
  REFRESH_TIMEOUT: 1000, // Mock API delay
};

// API endpoints (for future use)
export const API_ENDPOINTS = {
  REPORTS: '/api/reports',
  ANNOUNCEMENTS: '/api/announcements',
  CONTACTS: '/api/contacts',
  AUTH: '/api/auth',
};

// Error messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your connection.',
  UNAUTHORIZED: 'Please sign in to continue.',
  VALIDATION_ERROR: 'Please check your input and try again.',
  GENERIC_ERROR: 'Something went wrong. Please try again.',
  CAMERA_PERMISSION: 'Camera permission is required.',
  LOCATION_PERMISSION: 'Location permission is required.',
};

// Success messages
export const SUCCESS_MESSAGES = {
  REPORT_SUBMITTED: 'Your report has been submitted successfully!',
  LOGIN_SUCCESS: 'Welcome back!',
  LOGOUT_SUCCESS: 'You have logged out.',
  ACCOUNT_CREATED: 'Account created! Please sign in.',
};
