import { StyleSheet, View, Text, TouchableHighlight, TextInput, Alert } from 'react-native';
import React from 'react';
import StyledText from '../src/components/StyledText';
import { Formik } from 'formik';
import { RegisterSchema } from '../src/schemas/SchemaValidation.js';

const Register = ({ navigation }) => {
  //email, password, username
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111418',
      justifyContent: 'center',
      alignItems: 'center'
    },
    formContainer: {
      backgroundColor: '#e6e7e7',
      padding: 20,
      borderRadius: 20,
      width: '90%'
    },
    inputStyle: {
      borderColor: '#28141A',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginVertical: 10
    },
    errorTxt: {
      fontSize: 12,
      color: '#FF0D10'
    },
    submitBtn:{
      backgroundColor: '#772339',
      padding: 10,
      marginVertical: 10,
      borderRadius: 15,
      justifyContent: 'center'
    },
    submitBtnTxt: {
      color: '#e6e7e7',
      textAlign: 'center',
      fontSize: 18
    }
  })

  return (
    <Formik initialValues={{
      email: '',
      username: '',
      password: ''
    }}
    validationSchema={RegisterSchema}
    onSubmit={values => {
      Alert.alert(`Registrado con exito \n Tu correo: ${values.email} \n Tu usuario: ${values.username}`)
      navigation.navigate('Home')
      }}
    >
      
      {({values, errors, touched, handleChange,
      setFieldTouched, isValid, handleSubmit}) =>(
        
      
    <View style={styles.container}>
      <View style={styles.formContainer}>
      <StyledText fontSize='subheading' style={{marginBottom: 10, color : '#0C0F01' } }> Registrate </StyledText>
      <TextInput style={styles.inputStyle}  placeholder='Email' 
      value={values.email} onChangeText={handleChange('email')} onBlur={()=> setFieldTouched('email')} autoCapitalize='false' />
      {touched.email && errors.email && ( <StyledText style={styles.errorTxt}>{errors.email}</StyledText>)}
      <TextInput style={styles.inputStyle}  placeholder='Usuario'
      value={values.username} onChangeText={handleChange('username')} onBlur={()=> setFieldTouched('username')} autoCapitalize='false'/>
      {touched.username && errors.username && ( <StyledText style={styles.errorTxt}>{errors.username}</StyledText>)}
      <TextInput style={styles.inputStyle}  placeholder='Contraseña'
      value={values.password} onChangeText={handleChange('password')} onBlur={()=> setFieldTouched('email')} autoCapitalize='false' />
      {touched.password && errors.password && (<StyledText style={styles.errorTxt}>{errors.password}</StyledText>)}
      <TouchableHighlight 
      onPress={handleSubmit} 
      disabled={!isValid}
      style={[styles.submitBtn,
      {backgroundColor: isValid ? '#772339' : '#28141A'},
      ]}>
        <StyledText style={styles.submitBtnTxt}> Registrarse </StyledText>  
      </TouchableHighlight>
      </View>
    </View>
    )}
    </Formik>
  )
}

export default Register