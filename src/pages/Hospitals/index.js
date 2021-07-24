import React from 'react'
import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import { hospital1, IbgHos,hospital2 } from '../../assets'
import ListHospitals from '../../components/molecules/ListHospitals'
import { colors, fonts } from '../../utils'

const Hospitals = () => {
    return (
        <View style={styles.page}>
            <ImageBackground source={IbgHos} style={styles.bg}>
                <Text style={styles.title}> Nearby hospital</Text>
                <Text style ={styles.des}> 3 available</Text>
            </ImageBackground>
            <View style={styles.content}> 
                <ListHospitals type="Rumah Sakit" name="Budi Asih" address="Jl. Jauh" pic={hospital1}/>
                <ListHospitals type="Rumah Sakit" name="Agung" address="Jl. Dekat" pic={hospital2}/>
                <ListHospitals type="Rumah Sakit" name="Onama" address="Jl. DImato" pic={hospital1}/>
            </View>
        </View>
    )
} 

export default Hospitals

const styles = StyleSheet.create({
    content:{
    backgroundColor: colors.white,
    borderRadius:20,
    flex:1,
    marginTop:-30,
    paddingTop:14
    },
    bg:{ 
        height:240,
        paddingTop:30
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.white,
        textAlign:'center'
    },
    des:{
        fontSize:14,
        fontFamily:fonts.primary[300],
        color:colors.white,
        marginTop:6,
        textAlign:'center'
    },
    page:{
        backgroundColor:colors.secondary,
        flex:1
    }

})
