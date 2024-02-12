import React from "react";
import { Button, View, TouchableHighlight, StyleSheet } from "react-native";
import StyledText from "../src/components/StyledText";
const Home = ({ navigation }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111418',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    buttonContainer:{
      backgroundColor: '#1f242c',
      padding: 10,
      borderRadius: 20,
      width: '90%',
    },
    btn:{
      backgroundColor: '#772339',
      padding: 10,
      marginVertical: 10,
      borderRadius: 15,
      justifyContent: 'center'
    }
  })

  return(
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
      
      <TouchableHighlight style={styles.btn} onPress={()=>console.log('Menu btn')}> 
        <View>
          <StyledText fontSize='subheading' >Menu</StyledText>
        </View>
      </TouchableHighlight>
      
      <TouchableHighlight style={styles.btn}>
      <View style={{alignItems: 'center'}}>
        <StyledText> Total de gastos del mes:</StyledText>
        <StyledText> $75,000</StyledText>
      </View>
      </TouchableHighlight>

      <TouchableHighlight style={styles.btn}>
        <View style={{alignItems: 'center'}}>
          <StyledText> Total de ahorro: </StyledText>
          <StyledText> $8,000</StyledText>
        </View>
      </TouchableHighlight>
      
        <StyledText fontSize='subheading' color='secondary'
        > Promedios </StyledText>
        <Button title=" + " />
    
      </View>
    </View>
  )
}
export default Home