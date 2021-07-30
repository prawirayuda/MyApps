import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../utils'
import { Gap, Header, List, Profile } from './../../components'

const UserProfile = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header 
            title= "Profile" 
            onPress={() => navigation.goBack()}/>
            <Gap height={10}/>
            <Profile name="ghani" desc="yutuber"/>
            <Gap height={14}/>
            <List 
            name = "Edit Profile" 
            desc="Last Update Today" 
            type="next" 
            icon="edit-profile"
            onPress={() => navigation.navigate('UpdateProfile')}
            />
            <List name = "Language" desc="Indonesia" type="next" icon="language" />
            <List name = "Rate" desc="Penilaian untuk dokter Ajo" type="next" icon="rate"/>
            <List name = "Help" desc="Last Update Today" type="next" icon="help"/>

        </View>
    )
}

export default UserProfile

const styles = StyleSheet.create({
    page:{
        flex:1,
        backgroundColor:colors.white
    }
})
