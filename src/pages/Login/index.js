import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Ilogo} from '../../assets';
import { Button, Gap, Input, Link } from '../../components';
import { fonts } from '../../utils';
import { colors } from '../../utils/colors';

const Login = ({navigation}) => {
    return (
        <View style = {styles.page}>
            <Ilogo/>
            <Text style={styles.title}>Masuk dan Mulai Membuat Karyamu</Text>
            <Input label="Email Address"/>
            <Gap height={10}/>
            <Input label="Password" /> 
            <Gap height={20}/>
            <Link title="Forgot My Password" size={12}/>
            <Gap height={20}/>
            <Button title="Masuk" onPress={()=> navigation.replace('MainApp')} />
            <Gap height={16}/>        
            <Link title="Create New Account" size={16} align="center"/> 
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    page: { padding:40, 
            backgroundColor:colors.white,
            flex:1},
    title: { fontSize : 20,
             fontFamily: fonts.primary[700],
             color: colors.text.primary,
             marginTop:40,
             marginBottom:40,
             maxWidth:300,}
})
