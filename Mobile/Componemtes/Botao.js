import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';


export function Botao(props) {
  return (
    <TouchableOpacity style={[styles.botao, { width: props.largura }]} onPress={props.onPress}>
      <Text style={[styles.textoBotao, { fontSize: props.tamanhoFonte }]}>{props.texto}</Text>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textoBotao: {
    color: 'white',
    fontWeight: 'bold',
  },
});
