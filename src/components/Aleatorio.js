import React from 'react'
import { Text } from 'react-native'

import Estilo from './estilo'

export default ({ min, max }) => {
    const valorAleatorio = getRandomInt(min, max)

    return (
        <Text style={Estilo.txtG}>
            Valor entre {min} e {max}: {valorAleatorio}
        </Text>
    )
}


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}