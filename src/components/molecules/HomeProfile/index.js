import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DummyUser } from '../../../assets/dummy'
import {colors, fonts} from '../../../utils'

const HomeProfile = ({onPress}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={DummyUser} style={styles.avatar}/>
            <View>
            <Text style={styles.name}>Ghani Bukan</Text>
            <Text style={styles.profesi}>Athlete</Text>
            </View>
        </TouchableOpacity>
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
