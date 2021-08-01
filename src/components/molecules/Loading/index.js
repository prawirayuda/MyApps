import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import { colors, fonts } from '../../../utils'

const Loading = () => {
    return (
        <View style={styles.wrapper}>
            <ActivityIndicator size="large" color={colors.primary}/>
            <Text style={styles.text}>`Wait a moment ^^`</Text>
        </View>
    )}

export default Loading

const styles = StyleSheet.create({
    wrapper:{
        flex:1,
        position:'absolute',
        height:'100%',
        width:'100%',
        backgroundColor: colors.LoadingBackground,
        justifyContent:'center',
        alignItems:'center'
    
    },
    text :{
        fontSize:18,
        color:colors.primary,
        fontFamily:fonts.primary[600],
        marginTop:16
    }
})
