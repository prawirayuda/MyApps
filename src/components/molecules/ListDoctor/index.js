import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import { DummyDoctor2 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListDoctor = () => {
    return (
        <View style={styles.container}>
            <Image source={DummyDoctor2} style={styles.avatar}/>
            <View>
                <Text style={styles.name}>Docter Ajo</Text>
                <Text style={styles.des}>Isi Chat pelanggan terakhir....</Text>    
            </View>
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
        alignItems:'center'
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
    }
})
