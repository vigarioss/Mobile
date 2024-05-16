import React from 'react';
import { StyleSheet, TextInput } from 'react-native';


export function CampoTexto(props) {
  return (
    <TextInput
      style={styles.input}
      keyboardType={props.tipoTeclado}
      placeholder={props.placeholder}
      onChangeText={props.onChangeText}
    />
  );
}


const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
