import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView, TouchableOpacity, CheckBox } from 'react-native';


export default class NovaConta extends Component {

  state = {
    nome: '',
    cpf: '',
    email: '',
    telefone: '',
    senha: ''
  }

  render() {
    return (


      <ScrollView>
        <View style={texto.container}>
          <View style={texto.alinhamento}>
            <Text style={texto.nome}>Nome</Text>
            <TextInput style={texto.borda}
              value={this.state.nome} onChangeText={texto => { this.setState({ nome: texto }) }}></TextInput>
          </View>

          <View style={texto.alinhamento}>
            <Text style={texto.cpf}>CPF</Text>
            <TextInput style={texto.borda}
              value={this.state.cpf} onChangeText={texto => { this.setState({ cpf: texto }) }}></TextInput>
          </View>

          <View style={texto.alinhamento}>
            <Text style={texto.email}>E-mail</Text>
            <TextInput style={texto.borda}
              value={this.state.email} onChangeText={texto => { this.setState({ email: texto }) }}></TextInput>
          </View>

          <View style={texto.alinhamento}>
            <Text style={texto.telefone}>Telefone</Text>
            <TextInput style={texto.borda}
              value={this.state.telefone} onChangeText={texto => { this.setState({ telefone: texto }) }}></TextInput>
          </View>

          <View style={texto.alinhamento}>
            <Text style={texto.senha}>Senha</Text>
            <TextInput secureTextEntry={true} style={texto.borda}
              value={this.state.senha} onChangeText={texto => { this.setState({ senha: texto }) }}></TextInput>
          </View>

          <View style={texto.ckalinhamento}>
            <CheckBox />
            <Text style={texto.checkboxTexto}>Aceito os termos e as condições.</Text>
          </View>

          <TouchableOpacity onPress={this.cadastrar}>
            <View style={texto.botao}>
              <Text style={texto.dentroBotao}>Cadastrar</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>


    );
  }
}

const texto = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  palavras: {
    textAlign: 'center',
    marginTop: '-20%'
  },
  borda: {
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 10,
    width: 280,
    marginBottom: 20,
    height: 35
  },
  alinhamento: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  telefone: {
    marginLeft: -12,
    marginTop: -20
  },
  cpf: {
    marginRight: 20,
    marginTop: -20
  },
  nome: {
    marginRight: 8,
    marginTop: -20
  },
  email: {
    marginLeft: 5,
    marginTop: -20
  },
  senha: {
    marginRight: 2,
    marginTop: -20
  },
  botao: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    marginTop: 20,
    backgroundColor: '#e57373',
    borderColor: '#e57373',
    height: 40
  },
  dentroBotao: {
    color: 'white'
  },
  checkboxTexto: {
    fontSize: 10
  },
  ckalinhamento: {
    alignItems: 'center',
    flexDirection: 'row',
  }
});


