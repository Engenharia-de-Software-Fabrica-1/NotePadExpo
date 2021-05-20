import React from 'react';
import { View, Text, StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Flexbox from './Componentes/Flexbox';
import Icone from './Componentes/Icone';
import NovaConta from './View/Cadastrar'

export default function App() {
  return (
      <SafeAreaView>

        <Flexbox></Flexbox>
        <Icone></Icone>
        <View>
          <Text style={texto.palavras}>Preencha todos os campos para concluir seu cadastro:</Text>
        </View>

        <View>
          <NovaConta></NovaConta>
        </View>

      </SafeAreaView>

  );
}

const texto = StyleSheet.create({
  palavras: {
    textAlign: 'center',
    marginTop: -80
  },
});