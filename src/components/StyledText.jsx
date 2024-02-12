import React from  "react";
import { Text, StyleSheet } from "react-native";
import theme from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.color.general,
    fontFamily: theme.fonts.main,
    fontSize: theme.fontSizes.body
  },
  colorPrimary: {
    color: theme.color.primary
  },
  colorSecondary: {
    color: theme.color.secondary
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  textAlignCenter : {
    textAlign: 'center'
  }
})

export default function styledText ({children, align, fontSize, fontWeight, color, style, ...restofprops}){
const textStyles = [
  styles.text,
  align === 'center' && styles.textAlignCenter,
  fontSize === 'subheading' && styles.subheading,
  fontWeight === 'bold' && styles.bold,
  color === 'primary' && styles.colorPrimary,
  color === 'secondary' && styles.colorSecondary,
  style
]

return(
  <Text style={textStyles} {...restofprops}>
    {children}
  </Text>
)
}