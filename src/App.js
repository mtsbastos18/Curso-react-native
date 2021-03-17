import React from 'react'
import { View, StyleSheet } from 'react-native'

/* components */ 
import Contador from './components/Contador'
import Botao from './components/Botao'
// import Titulo from './components/Titulo'
// import Aleatorio from './components/Aleatorio'
// import MinMax from './components/MinMax'
// import { Comp1, Comp2 } from './components/Multi'
// import Primeiro from './components/Primeiro'

export default () => (  
    <View style={style.App}> 
        <Botao title="Aperte aqui"></Botao>
        {/*<Contador inicial={1} />
        <Botao title="Aperta"></Botao>
        <Titulo principal="Cadastro Produto" secundario="Tela de Cadastro"/>
        <Aleatorio min={10} max={18} />
        <MinMax min={3} max={30} />
        <Comp1/>
        <Comp2/>
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: 'center',
        padding: 20,
    }
})
