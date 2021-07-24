import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1 } from '../../assets'
import { Header, ListDoctor } from '../../components'
import { colors } from '../../utils'

const ChooseDoctor = ({type}) => {
    return (
        <View style={styles.page}>
            <Header type ="dark" title="Pilih Dokter "/>
            <ListDoctor type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>
            <ListDoctor type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>
            <ListDoctor type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>
            <ListDoctor type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>
            <ListDoctor type ="next" profile={DummyDoctor1} name={"Alexa"} desc={"Women"}/>

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
