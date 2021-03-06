import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { ICatObat, ICatPsikiater, ICatUmum } from '../../../assets'
import { colors, fonts } from '../../../utils'

const DoctorCategory = ({category,onPress}) => {
    const Icon =()=>{
        if (category === 'Dokter Umum') {
            return <ICatUmum style={styles.illustration}/>
        }
        if (category ==='Psikiater') {
            return <ICatPsikiater style={styles.illustration}/>
        }
        if (category ==='Dokter Obat') {
            return <ICatObat style={styles.illustration}/>
        }
        return <ICatUmum style={styles.illustration}/>
    }


    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon/>
            <Text style={styles.label}>Saya Cari </Text>
            <Text style={styles.category}>{category}</Text>
        </TouchableOpacity> 
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
