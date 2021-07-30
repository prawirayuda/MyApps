import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import {DummyUser, IconRemovePhoto} from '../../../assets'
import {colors, fonts} from '../../../utils'

const Profile = ({name, desc, isRemove}) => {
    return (
        <View style={styles.container}>
            <View style={styles.borderAvatar}>
                <Image source={DummyUser} style={styles.avatar}/>
                {isRemove && <IconRemovePhoto style={styles.removebtn}/>}
                
            </View>
            {name && (
                <View>
                    <Text style={styles.name}>{name} </Text>
                    <Text style={styles.profesi}>{desc}</Text>
                </View>
            )}
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
        marginTop:2,
        textAlign:'center'

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
        marginTop:16,
        textAlign:'center'
    },

    removebtn:{
        position:'absolute',
        right:8,
        bottom:8
    }
})
