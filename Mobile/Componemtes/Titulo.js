import React from 'react';
import { StyleSheet, Text } from 'react-native';


export function Titulo(props) {
  return (
    <Text style={[styles.titulo, { fontSize: props.tamanho, color: props.cor }]}>
      {props.texto}
    </Text>
  );
}


const styles = StyleSheet.create({
  titulo: {
    fontWeight: 'bold',
  },
});
