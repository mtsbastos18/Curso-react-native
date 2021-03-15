import React from 'react'
import { Text } from 'react-native'
import Estilo from './estilo'

export default props => (
        <Text style={Estilo.txtG}>O valor {props.min} é maior que o valor {props.max}</Text>
)