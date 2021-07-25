import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import  colors  from '../../../utils'


const InputChat = () => {
    return (
        <View style ={styles.container}>
            <TextInput style={styles.input} placeholder="Tulis Pesan untuk Dokter Naina"/>
        </View>
    )
}

export default InputChat

const styles = StyleSheet.create({
    input:{
        // backgroundColor: colors.pudar,
        padding: 14,
        borderRadius:10
    },
    container:{
        padding: 16
    }
})
