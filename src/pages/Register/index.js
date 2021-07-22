import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Button, Gap, Header, Input } from '../../components'
import { colors } from '../../utils/colors'

const Register = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header onPress={()=> navigation.goBack()} title ="Daftar Akun"/>
            <View style={styles.content}>
                <Input label="Full Name"/>
                <Gap height={14}/>
                <Input label="Pekerjaan"/>
                <Gap height={14}/>
                <Input label="Email"/>
                <Gap height={14}/>
                <Input label="Password"/>
                <Gap height={18}/>
                <Button title="Continue"
                onPress={() => navigation.navigate('UploadPhoto')}/>                
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
