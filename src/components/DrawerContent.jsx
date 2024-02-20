import React from "react";
import { View } from 'react-native';
import StyledText from "./StyledText";
import { DrawerContentScrollView } from "@react-navigation/drawer";
export default function DrawerContent(props){
    return(
        <View style={{flex : 1}}>
            <DrawerContentScrollView {...props} >
            <StyledText color='secondary'>
                Hola me dicen el contenedor
            </StyledText>
            </DrawerContentScrollView>
        </View>
    )
}