import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logo from '../assets/icone.png'


export default props => {
    return (
        <View style={container.centralizar}>
            <Image style={logotipo.imagem}
                source={logo}
            />
        </View>
    )
}

const logotipo = StyleSheet.create({
    imagem: {
        width: '40%',
        height: '40%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    }
})

const container = StyleSheet.create({
    centralizar: {
        marginTop: '-25%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})