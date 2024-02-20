import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
//import Home from '../Screens/Home';
import Expenses from '../Screens/Expenses';
import Main from './MainNavigation';
import DrawerContent from './components/DrawerContent';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
    return(
        <Drawer.Navigator 
        //DrawerContent => Tajeta de usuario
        drawerContent={props => <DrawerContent {...props}/>}
        
        screenOptions={{headerShown: false}}
        >
        <Drawer.Screen name="Home" component={Main} />
        </Drawer.Navigator>
    )
}