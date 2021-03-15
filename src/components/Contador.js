import React, { useState } from 'react'
import { Text, Button } from 'react-native'
import Estilo from './estilo'

export default (props) => {
    //let numero = props.inicial
    let [numero, setNumero] = useState(props.inicial)
    
    const inc = () => setNumero(numero = numero + 1)
    const dec = () => setNumero(numero = numero - 1)

    return (
        <>
            <Button title="+" onPress={inc}></Button>
            <Text style={Estilo.txtG}>{numero}</Text>
            <Button title="-" onPress={dec}></Button>
        </>
    )
}
