import React from "react";
import { View , TouchableOpacity, StyleSheet } from 'react-native';
import StyledText from "./StyledText";
import Icon  from "react-native-vector-icons/FontAwesome5";
export default function DrawerCard({navigation,username, id}){

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#772339',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        padding: 5,
        margin: 10
    },
    icon:{
        margin: 5,
        marginHorizontal: 10
    }
})

    return(
    <View>
    <TouchableOpacity 
    style={styles.container}
    onPress={()=> navigation.navigate('Expenses') }
    >
        <View>
        <Icon 
        name="user-astronaut"
        onPress={()=>console.log(username, 'soi')}
        size={30}
        color={'#28141A'}
        style={styles.icon}
        />
        </View>
        <View>
    <StyledText>
        {username}
    </StyledText>
    <StyledText>
        Gasto actual ${id}
    </StyledText>
    </View>
    </TouchableOpacity>
    </View>
)
}
