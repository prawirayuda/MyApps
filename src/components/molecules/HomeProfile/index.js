import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { DummyUser } from '../../../assets/dummy'
import {colors, fonts} from '../../../utils'

const HomeProfile = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyUser} style={styles.avatar}/>
            <View>
            <Text style={styles.name}>Ghani Bukan</Text>
            <Text style={styles.profesi}>Athlete</Text>
            </View>
        </View>
    )
}

export default HomeProfile

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    avatar:{
        width: 46,
        height:46,
        borderRadius: 46/2,
        marginRight:12
    },
    name :{
        fontSize: 16,
        fontFamily: fonts.primary[600],
        color:colors.text.primary
    },
    profesi:{
        fontSize:12,
        fontFamily: fonts.primary[400],
        color: colors.text.secondary
    },

})
