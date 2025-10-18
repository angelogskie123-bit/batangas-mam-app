import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import CustomTabBar from './components/navigation/CustomTabBar';
import LoginScreen from './screens/LoginScreen';
import ReportScreen from './screens/ReportScreen';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import PhoneScreen from './screens/PhoneScreen';
import HistoryScreen from './screens/HistoryScreen';
import AnnouncementsScreen from './screens/AnnouncementsScreen';
import { colors } from './theme';
import Toast from './components/Toast'; // optional global toast

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Main Tab Navigator for authenticated users
function MainTabNavigator({ username, onLogout, showToast }) {
  return (
    <Tab.Navigator
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.card,
        },
        headerTintColor: colors.foreground,
        headerTitleStyle: {
          fontWeight: '600',
        },
        headerShown: true,
      }}
    >
      <Tab.Screen 
        name="Home" 
        options={{ title: 'Home' }}
      >
        {() => <HomeScreen />}
      </Tab.Screen>
      <Tab.Screen 
        name="Phone" 
        options={{ title: 'Emergency' }}
      >
        {() => <PhoneScreen />}
      </Tab.Screen>
      <Tab.Screen 
        name="Report" 
        options={{ title: 'Report' }}
      >
        {() => (
          <ReportScreen
            username={username}
            onLogout={onLogout}
            showToast={showToast}
          />
        )}
      </Tab.Screen>
      <Tab.Screen 
        name="History" 
        options={{ title: 'History' }}
      >
        {() => <HistoryScreen username={username} />}
      </Tab.Screen>
      <Tab.Screen 
        name="Announcements" 
        options={{ title: 'News' }}
      >
        {() => <AnnouncementsScreen />}
      </Tab.Screen>
    </Tab.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);
  const [toast, setToast] = useState({ visible: false, message: '' });

  const showToast = (message) => {
    setToast({ visible: true, message });
  };

  return (
    <PaperProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.card },
            headerTintColor: colors.foreground,
            contentStyle: { backgroundColor: colors.background },
          }}
        >
          {user ? (
            <Stack.Screen 
              name="MainTabs" 
              options={{ headerShown: false }}
            >
              {() => (
                <MainTabNavigator
                  username={user?.username}
                  onLogout={() => {
                    setUser(null);
                    showToast('You have logged out.');
                  }}
                  showToast={showToast}
                />
              )}
            </Stack.Screen>
          ) : (
            <>
              <Stack.Screen name="Login" options={{ title: 'Sign In' }}>
                {({ navigation }) => (
                  <LoginScreen
                    onLogin={(u) => {
                      setUser(u);
                      showToast(`Welcome back, ${u.username}!`);
                    }}
                    onGoSignUp={() => navigation.navigate('SignUp')}
                    showToast={showToast}
                  />
                )}
              </Stack.Screen>
              <Stack.Screen name="SignUp" options={{ title: 'Create Account' }}>
                {({ navigation }) => (
                  <SignUpScreen
                    onSignedUp={() => {
                      navigation.replace('Login');
                      showToast('Account created! Please sign in.');
                    }}
                    onBack={() => navigation.goBack()}
                    showToast={showToast}
                  />
                )}
              </Stack.Screen>
            </>
          )}
        </Stack.Navigator>
        <Toast
          visible={toast.visible}
          message={toast.message}
          onDismiss={() => setToast({ ...toast, visible: false })}
        />
      </NavigationContainer>
    </PaperProvider>
  );
}
