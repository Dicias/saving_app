import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Register from "../Screens/Register";
import Start from "../Screens/Start";
import Icon from 'react-native-vector-icons/Entypo';
import Expenses from "../Screens/Expenses";


const Main = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();


  return(
        <Stack.Navigator 
        screenOptions={{headerStyle : 
        {backgroundColor: '#111418' },
         headerTintColor: '#e6e7e7',
         headerLeft: ()=>{
          return(
            <Icon 
            name="menu"
            onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}
            size={30}
            color= '#900'
            style={{margin: 5}}
            />
          )
         } 
        
        }}
         >
        <Stack.Screen 
          name="Inicio"
          component={ Start }
          options={{headerShown : false}}
        />
          <Stack.Screen 
          name="Home"
          component={ Home }
          />
          <Stack.Screen 
          name="Login"
          component={ Login }
          options={{headerShown : false}}
          />
          <Stack.Screen 
          name="Register"
          component={ Register }
          options={{headerShown : false}}
          />
          <Stack.Screen 
          name="Expenses"
          component={ Expenses }
          />
        </Stack.Navigator>
    )
}

export default Main;