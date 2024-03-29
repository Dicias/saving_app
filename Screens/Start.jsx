import { View, StyleSheet, TouchableHighlight } from 'react-native' 
import StyledText from '../src/components/StyledText'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#111418',
    alignContent: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 15
  },
  button:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    backgroundColor: '#fbca1f',
    color: '#e6e7e7',
    height: 80,
  }
})
const Start = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <StyledText>
          Aqui va el SVG
        </StyledText>
      </View>
      <StyledText fontWeight='bold' style={{fontSize: 30}}>
         Bienvenido
      </StyledText>
      <StyledText style={{fontSize: 12}}
      > Selecciona ingresar si ya cuentas con una cuenta </StyledText>
      <StyledText style={{fontSize: 12}}
      > O selecciona registrarte si aun no lo has hecho </StyledText>
      <View style={styles.container}>
      <TouchableHighlight style={styles.button } 
      onPress={()=>{
        navigation.navigate('Login')
      }}
      activeOpacity={0.1}>
        <View>
        <StyledText style={{fontSize: 20}}> Login </StyledText>
        </View>  
      </TouchableHighlight>
      <TouchableHighlight style={styles.button} 
      onPress={()=>{
        navigation.navigate('Register')
      }}
      activeOpacity={0.1}>
        <View>
        <StyledText style={{fontSize: 20}}> Register </StyledText>
        </View>  
      </TouchableHighlight>
    </View>
    </View>
  )
}

export default Start