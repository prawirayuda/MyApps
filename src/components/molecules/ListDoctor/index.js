import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { IconNext } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = ({profile,name,desc,type}) => {
    return (
        <View style={styles.container}>
            <Image source={profile} style={styles.avatar}/>
            <View style={styles.content}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.des}>{desc}</Text>    
            </View>
            {type === 'next' && <IconNext/>}
        </View>
    )
}

export default ListDoctor

const styles = StyleSheet.create({
    avatar:{
        height:46,
        width:46,
        borderRadius:46/2,
        marginRight:12
    },
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor:colors.border,
        alignItems:'center',
        justifyContent:'space-between'
    },
    name:{
        fontSize:16,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    des:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary
    },
    content:{
        flex:1
    }
})
