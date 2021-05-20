import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default props => {
    return (

        <View style={estilo.container}>
            <Text style={texto.palavra}>

                NOTEPAD TOP

            </Text>
        </View>

    )
}

const estilo = StyleSheet.create({
    container: {
        backgroundColor: '#e57373',
        width: '100%',
        height: '8%',
        flexDirection: 'row'
    }
})

const texto = StyleSheet.create({
    palavra: {
        color: 'white',
        fontSize: 20,
        flex: 1,
        textAlign: 'center',
        marginTop: 'auto',
        marginBottom: 'auto'
    }
})