import { Component } from 'react'
import {Image, TextInput, Text, StyleSheet, View, TouchableOpacity, Alert} from 'react-native'

clicou=() => {
  Alert.alert("Botão Pressionado")
}

export default class App extends Component {
  render(){
    return(
        <View style={styles.container}>
        <Image source={require('src/assets/logo.png')}/>
        <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        />

        <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        />


        <TouchableOpacity style={styles.button} onPress={clicou}>
        <Text style={styles.text}>ok</Text>
        </TouchableOpacity>
        </View>
    )
  } 
}

const styles =  StyleSheet.create({
container:{
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'beige'
},
input:{
  marginTop: 10,
  padding:10,
  width:300,
  backgroundColor: 'white',
  fontSize: 16,
  fontColor: '#e6e8eb',
  borderRadius: 8
},
button:{
  width: 300,
  height: 42,
  backgroundColor: "orange",
  marginTop: 10,
  borderRadius: 8,
  alignItems: 'center',
  justifyContent: 'center'
}
})