import React, { useState } from 'react'
import { Button, Image, StyleSheet } from 'react-native'
import Estilo from './estilo'

export default props => {
    let [estilo, trocaEstilo] = useState(Estilo.imagemHide)
    let [estiloBotao, trocaEstiloBotao] = useState(Estilo.imagemShow)
    
    const executar = () => {
        trocaEstilo(Estilo.imagemShow)
    }


    return (
        <>
            <Image style={estilo} source={require('../assets/negao_da_picona.jpeg')}></Image>
            <Button style={Estilo.margin} title={props.title} onPress={executar}></Button>
        </>
    )
}


