import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
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
        <Drawer.Screen name="Main" component={Main} />
        </Drawer.Navigator>
    )
}