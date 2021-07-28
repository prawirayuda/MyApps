import React from 'react'
import { StyleSheet, View } from 'react-native'
import { DummyDoctor1 } from '../../assets'
import { Header, List } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({navigation}) => {
    return (
        <View style={styles.page}>
            <Header type ="dark" title="Pilih Dokter " onPress={()=> navigation.goBack()}/>
            <List type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"} Onpress={() => navigation.navigate('Chatting')}/>
            <List type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>
            <List type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>
            <List type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>
            <List type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>

        </View>
    )
}

export default ChooseDoctor

const styles = StyleSheet.create({
    page:{
        backgroundColor:colors.white,
        flex:1
    }
})
