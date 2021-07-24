import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-reanimated'
import { hospital1 } from '../../../assets'
import { colors, fonts } from '../../../utils'

const ListHospitals = ({type, name, address, pic}) => {
    return (
        <View style={styles.container}>
            <Image source={pic} style={styles.picture}/>
            <View>
                <Text style={styles.title}>{type}</Text>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </View>
    )
}

export default ListHospitals

const styles = StyleSheet.create({
    picture:{
        width:80,
        height:60,
        borderRadius:11,
        marginRight:16
    },
    container:{
        flexDirection:'row',
        padding:16,
        borderBottomWidth:1,
        borderBottomColor: colors.border,
    },    
    title:{
    fontSize: 16,
    fontFamily:fonts.primary.normal,
    color:colors.text.primary,
    },
    
    address:{
        fontSize:12,
        fontFamily:fonts.primary[300],
        color:colors.text.secondary,
        marginTop:6
    }
})
