import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../utils'
import {Gap, Header, List, Profile} from './../../components'

const UserProfile = () => {
    return (
        <View style={styles.page}>
            <Header title= "Profile"/>
            <Gap height={10}/>
            <Profile/>
            <Gap height={14}/>
            <List name = "Edit Profile" desc="Last Update Today" type="next" icon="edit-profile"/>
            <List name = "Language" desc="Last Update Today" type="next" icon="language"/>
            <List name = "Rate" desc="Last Update Today" type="next" icon="rate"/>
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
