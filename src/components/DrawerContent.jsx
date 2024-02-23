import React from "react";
import { View, StyleSheet } from 'react-native';
import { DrawerContentScrollView } from "@react-navigation/drawer";
import StyledText from "./StyledText";
import users from "../../data"; // esto se cammbia por la db
import DrawerCard from "./DrawerCard";
import { useNavigation } from "@react-navigation/native";

export default function DrawerContent(props){
   const navigation = useNavigation();

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
        <View>    
            {users.map(user => 
            <DrawerCard 
            username={user.username}
            id={user.id} 
            navigation={navigation}/> )}
        </View>
        </DrawerContentScrollView>
        </View>
    )
}