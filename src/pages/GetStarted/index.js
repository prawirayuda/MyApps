import React from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { IGetStarted, Ilogo } from '../../assets/illustration'
import { Button, Gap } from '../../components/atoms'
import { fonts } from '../../utils'
import { colors } from '../../utils'

const GetStarted = ({navigation}) => {
    return (
        <ImageBackground source={IGetStarted} style={styles.page}>
            <View>
             <Ilogo/>
             <Text style={styles.title}>Sini Ku Jepret !! Biar Ganteng </Text>
            </View>
            <View>
             <Button title="Yuk Daftar" onPress={() => navigation.navigate('Register')}/>
             <Gap height={16}/>
             <Button type="secondary" title="Masuk" onPress={() => navigation.replace ('Login') }/>           
            </View>
        </ImageBackground>
    )
}

export default GetStarted

const styles = StyleSheet.create({
    page: {padding: 40, 
        justifyContent:'space-between', 
        backgroundColor:colors.white,
        flex:1
        
    },

    title: {fontSize:28, 
        color:colors.white, 
        marginTop: 91,
        fontFamily:fonts.primary[700],
        
    }
})
