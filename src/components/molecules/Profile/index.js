import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {DummyUser} from '../../../assets'
import {colors, fonts} from '../../../utils'

const Profile = () => {
    return (
        <View style={styles.container}>
            <View style={styles.borderAvatar}>
                <Image source={DummyUser} style={styles.avatar}/>
            </View>
            <Text style={styles.name}>Ghani </Text>
            <Text style={styles.profesi}>Tukang Yutub</Text>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        justifyContent:'center'
    },
    avatar:{
        borderRadius:110/2,
        width: 110,
        height:110
    },
    profesi:{
        fontSize:16,
        fontFamily:fonts.primary[600],
        color:colors.text.secondary,
        marginTop:2
    },
    borderAvatar:{
        width:130,
        height:130,
        borderRadius:130/2,
        justifyContent:'center',
        alignItems:'center',
        borderColor:colors.border
        
    },
    name :{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:16
    },
    profesi:{

    }
})
