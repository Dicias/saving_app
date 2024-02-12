import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/MainNavigation';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style='auto' />
      <MainNavigation />
    </SafeAreaView>
  );
}

