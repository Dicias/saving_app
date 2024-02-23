import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import StyledText from "./StyledText";
import { Icon } from "react-native-vector-icons/Feather";

export default function DrawerBtnhome(){

    const styles= StyleSheet.create({
        container:{

        }
    })

    return(
        <View>
            <TouchableOpacity>
                <Icon
                 />
            <StyledText>
                Inicio
            </StyledText>
        </TouchableOpacity>
        </View>
    )
}