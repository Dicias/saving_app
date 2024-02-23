import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import DrawerNavigation from './src/DrawerNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
    return(
        <NavigationContainer style={{flex: 1}}>
            <StatusBar style='light' />
            <DrawerNavigation />
        </NavigationContainer>
    )
}