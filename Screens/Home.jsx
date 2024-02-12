import React from "react";
import { Button, View, Text, TouchableOpacity } from "react-native";
import StyledText from "../src/components/StyledText";
const Home = ({ navigation }) => {
  return(
    <View>
      <Button title="Menu" />
      <Button title="T. Gastos" />
      <Button title="T Ahorros" />
      <View>
        <StyledText fontSize='subheading' color='secondary'
        > Promedios </StyledText>
        <Button title=" + " />
      </View>

    </View>
  )
}
export default Home