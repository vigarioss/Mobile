import React, { useState } from 'react';
import { View } from 'react-native';
import { Titulo } from './Componemtes/Titulo';
import { CampoTexto } from './Componemtes/CampoTexto';
import { Botao } from './Componemtes/Botao';
import { Lista } from './Componemtes/Lista';


export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [historico, setHistorico] = useState([]);


  const calcularIMC = () => {
    const imc = (parseFloat(peso) / (parseFloat(altura) * parseFloat(altura))).toFixed(2);
    const mensagem = `Peso: ${peso}, Altura: ${altura}, IMC: ${imc}`;
    setHistorico([...historico, mensagem]);
  };


  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Titulo texto="Calculadora de IMC" tamanho={24} cor="black" />
      <CampoTexto
        placeholder="Digite o peso"
        tipoTeclado="numeric"
        onChangeText={setPeso}
      />
      <CampoTexto
        placeholder="Digite a altura"
        tipoTeclado="numeric"
        onChangeText={setAltura}
      />
      <Botao
        texto="Calcular IMC"
        largura={150}
        tamanhoFonte={16}
        onPress={calcularIMC}
      />
      <Titulo texto="Histórico de IMC" tamanho={20} cor="black" />
      <Lista dados={historico} />
    </View>
  );
}
