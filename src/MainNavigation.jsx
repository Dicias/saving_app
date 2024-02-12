import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../Screens/Home";
import Login from "../Screens/Login";
import Register from "../Screens/Register"
import { NavigationContainer } from "@react-navigation/native";
import Savings from "../Screens/Savings";
import Expenses from "../Screens/Expenses";
import Start from "../Screens/Start";

const Stack = createNativeStackNavigator();

const Main = () => {
  return(
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{headerStyle : {backgroundColor: '#111418' }, headerTintColor: '#e6e7e7' }}
         >
        <Stack.Screen 
          name="Inicio"
          component={ Start }
          />
          <Stack.Screen 
          name="Home"
          component={ Home }
          />
          <Stack.Screen 
          name="Login"
          component={ Login }
          />
          <Stack.Screen 
          name="Register"
          component={ Register }
          />
          <Stack.Screen 
          name="Savings"
          component={ Savings }
          />
          <Stack.Screen
          name="Expenses"
          component={ Expenses }
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default Main;