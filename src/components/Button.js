import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../utils/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    paddingVertical: 15,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.primary,
    marginVertical: 7,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderColor: colors.border
  },
  text: {
    color: colors.white,
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  textOutline: {
    color: colors.primary
  }
})

export const Button = ({ onPress= () => {}, children = "" , outline = false }) => {  
  const containerStlyes = [styles.container];
  const textStyles = [styles.text];

  if (outline) {
    containerStlyes.push(styles.containerOutline);
    textStyles.push(styles.textOutline)
  }
  return(
    <TouchableOpacity onPress={onPress} style={containerStlyes}>
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
}
