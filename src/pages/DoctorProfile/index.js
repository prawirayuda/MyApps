import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Profile, ProfileItem } from '../../components'
import { colors } from '../../utils'

const DoctorProfile = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Header title ="Doctor Profile" onPress={() => navigation.goBack()}/>
            <Profile name="nanana" desc="dokter Obat"/>
            <Gap height={10}/>
            <ProfileItem label="Alumni " value="PNP Negee"/>
            <ProfileItem label="Tempat Praktek " value="Jl Jakarta macet"/>
            <ProfileItem label="No. STR " value="1233000"/>
            <View style={styles.btn}>
            <Button title="Start Konsultasi" onPress={() => navigation.navigate('Chatting')}/>
            </View>
        </View>
    )
}

export default DoctorProfile

const styles = StyleSheet.create({
    container:{
        backgroundColor: colors.white,
        flex:1
    },
    btn:{
        paddingHorizontal:40,
        paddingTop:23
    }
})
