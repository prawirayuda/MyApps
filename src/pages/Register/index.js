import React from 'react'
import { useState } from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input, Loading } from '../../components'
import { Fire } from '../../config'
import { UseForm } from '../../utils'
import { colors } from '../../utils/colors'
import { showMessage, hideMessage } from "react-native-flash-message";

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

    const [loading,setLoading] = useState(false)
    const onContinue =() => {
        console.log (form)
        setLoading(true)
        Fire.auth()
        .createUserWithEmailAndPassword(form.email, form.password)
        .then((success) => {
            setLoading(false)
            setForm('reset')
            const data ={
                fullName:form.fullName,
                profession:form.profession,
                email:form.email
            }
            Fire.database().ref('users/' + success.user.uid +'/')
            .set(data)
        })

        .catch(error => {
            const errorMessage = error.message
            setLoading(false)
            
            showMessage({
                message: errorMessage,
                type: 'default',
                backgroundColor:'red',
                color: 'white'
              });
            console.log('error Register : ' , errorMessage)
        });


    }

    return (
        <>
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
        {loading && <Loading/>}
        </>
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
