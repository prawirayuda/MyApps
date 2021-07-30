import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconStar } from '../../../assets'
import { colors, fonts } from '../../../utils'

const RatedDoctor = ({onPress,name,avatar,desc}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={avatar} style={styles.avatar}/>
            <View style ={styles.profile}>
                <Text style={styles.name}>{name} </Text>
                <Text style={styles.category}>{desc} </Text>
            </View>
            <View style={styles.rate}>
                <IconStar/>
            </View>

        </TouchableOpacity>
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
        marginBottom: 16,
        alignItems : 'center'
        

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
