import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigator from './navigation/MainNavigator';
import { registerRootComponent } from 'expo';
// import { ModalProvider } from 'react-native-modals';
import { ToastProvider } from 'react-native-toast-notifications'

export default function App() {
  return (
    <ToastProvider>
      <MainNavigator />
    </ToastProvider>
  );
}
