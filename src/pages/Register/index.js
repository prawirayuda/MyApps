import React from 'react'
import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { Fire } from '../../config'
import { UseForm } from '../../utils'
import { colors } from '../../utils/colors'

const Register = ({navigation}) => {
    // const [fullName, setFullName] =useState('')
    // const [profession, setProfession]= useState('')
    // const [email, setEmail]= useState('')
    // const [password, setPassword]= useState('')

    const [form, setForm] = UseForm({
        fullName:'',
        profession:'',
        email:'',
        password:'',
    })

    const onContinue =() => {
        console.log (form)
        Fire.auth().createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            console.log('register success', success)
        })

        .catch(error => {
            const errorMessage = error.message
            console.log('error Register : ' , errorMessage)
        });


    }

    return (
        <View style={styles.page}>
            <Header onPress={()=> navigation.goBack()} title ="Daftar Akun"/>
            <View style={styles.content}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Input 
                label="Full Name"
                value={form.fullName} 
                onChangeText={(value) => setForm('fullName',value )}/>
                <Gap height={14}/>
                <Input 
                label="Pekerjaan"
                value={form.profession} 
                onChangeText={(value) => setForm('profession',value )}/>
                <Gap height={14}/>
                <Input 
                label="Email"
                value={form.email} 
                onChangeText={(value) => setForm('email',value )}/>
                <Gap height={14}/>
                <Input 
                label="Password"
                value={form.password} 
                onChangeText={(value) => setForm('password',value )} secureTextEntry/>
                <Gap height={18}/>
                <Button title="Continue"
                onPress={onContinue}/>                
            </ScrollView>
            </View>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    content: {
        padding:40,
        paddingTop:0,
    },
    page: {
        backgroundColor: colors.white,
        flex:1
        
    },
})
