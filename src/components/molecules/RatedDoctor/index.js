import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DummyDoctor1, IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor1} style={styles.avatar}/>
            <View style ={styles.profile}>
                <Text style={styles.name}>Rachel </Text>
                <Text style={styles.category}>Dokter Kulit </Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
            </View>

        </View>
    )
}

export default RatedDoctor

const styles = StyleSheet.create({
    avatar:{
        width:50,
        height: 50,
        borderRadius: 50/2,
        marginRight:12
    },
    container:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 16

    },
    rate:{
        flexDirection: 'row'
    },
    name:{
        fontSize:16,
        fontFamily: fonts.primary[600],
        color:colors.text.primary
    },
    category:{
        fontFamily:fonts.primary.normal,
        fontSize:12,
        color:colors.text.secondary,
        marginTop:2
    },
    profile:{
        flex:1
    }
})
