import React from "react";
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import StyledText from "./StyledText";
import users from "../../data";
import DrawerCard from "./DrawerCard";

export default function DrawerContent(props){
   
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#111418',
        padding: 5,
    }
})
    
    return(
        <View style={styles.container}>
        <DrawerContentScrollView {...props} >
        <StyledText fontSize='subheading'>
        Consulta otros usuarios    
        </StyledText>
        <View>    
            {users.map(user => 
            <DrawerCard 
            //navigation={navigator} //arreglar
            username={user.username}
            id={user.id} /> )}
        </View>
        </DrawerContentScrollView>
        </View>
    )
}