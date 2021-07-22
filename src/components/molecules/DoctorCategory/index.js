import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ICatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = () => {
    return (
        <View style={styles.container}>
            <ICatUmum style={styles.illustration}/>
            <Text style={styles.label}>Saya Cari </Text>
            <Text style={styles.category}>Dokter Umum</Text>
        </View>
    )
}

export default DoctorCategory

const styles = StyleSheet.create({
    container :{
        padding:12,
        backgroundColor: colors.cardLight,
        alignSelf : 'flex-start',
        borderRadius :10,
        marginRight:10,
        width:100,
        height:130
    },
    illustration:{
        marginBottom:20
    },
    label:{
        fontSize:12,
        fontFamily:fonts.primary[400],
        color: colors.text.primary
    },
    category:{
        fontSize:12,
        fontFamily:fonts.primary[600],
        color: colors.text.primary
    }
})
