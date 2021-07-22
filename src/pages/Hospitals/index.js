import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { IbgHos } from '../../assets'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
    return (
        <View>
            <ImageBackground source={IbgHos} style={styles.bg}>
                <Text style={styles.title}> Nearby hospital</Text>
                <Text style ={styles.des}> 3 available</Text>

            </ImageBackground>
            <Text> Hospitals</Text>
        </View>
    )
}

export default Hospitals

const styles = StyleSheet.create({
    bg:{ 
        height:240,
        paddingTop:30
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.white,
        textAlign:'center'
    },
    des:{
        fontSize:14,
        fontFamily:fonts.primary[300],
        color:colors.white,
        marginTop:6,
        textAlign:'center'

    }
})
