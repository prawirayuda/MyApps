import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyDoctor6 } from '../../../assets'
import { colors, fonts } from '../../../utils'
import { Button } from '../../atoms'

const DarkProfile = () => {
    return (
        <View style={styles.container}>
            <Button type ="icon-only" icon="back-light"/>
            <View style={styles.content}>
                <Text style={styles.name}>Nairabonaa</Text>
                <Text style={styles.desc}>Dokter Hati</Text>
            </View>
            <Image source={DummyDoctor6} style={styles.avatar} />
        </View>
    )
}

export default DarkProfile;

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.secondary,
        paddingVertical:30,
        paddingHorizontal:16,
        borderBottomRightRadius:20,
        borderBottomLeftRadius:20,
        flexDirection:'row',
        alignItems:'center'

    },
    content:{
        flex:1
    },
    avatar:{
        width:46,
        height:46,
        borderRadius:46/2
    },
    name:{
        fontSize:14,
        fontFamily:fonts.primary.normal,

        textAlign:'center',
        color:colors.white,
    },
    desc:{
        fontSize:14,
        fontFamily: fonts.primary.normal,
        marginTop:6,
        textAlign:'center',
        color:colors.text.subTitle
    },
})
