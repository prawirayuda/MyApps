import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { DummyDoctor6 } from '../../../assets'
import { fonts, colors } from '../../../utils'

const Other = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor6} style={styles.avatar}/>
            <View>
            <View style={styles.chatContent}>
                <Text style={styles.text}>Pak macam mana cara dapetin vit Z</Text>
            </View>
            <Text style={styles.date}>4.20 AM</Text>

            </View>
        </View>
    )
}

export default Other

const styles = StyleSheet.create({
    container:{
        marginBottom:20,
        alignItems:'flex-end',
        paddingLeft:16,
        flexDirection:'row'

    },
    chatContent:{
        maxWidth:'80%',
        padding: 12, 
        paddingRight:18,
        backgroundColor:colors.cardLight,
        borderRadius:10,
        borderBottomRightRadius:0,
        backgroundColor: colors.primary,
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.white
    },
    date:{
        fontSize:11,
        fontFamily: fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8
    },
    avatar:{
        width:30,
        height:30, 
        borderRadius:30/2,
        marginRight:12
    }
})
