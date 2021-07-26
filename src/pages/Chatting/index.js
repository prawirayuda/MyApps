import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ChatItem, Header, InputChat } from '../../components'
import { colors, fonts } from '../../utils'

const Chatting = () => {
    return (
        <View style={styles.page}>
            <Header title="Naina Sosan" type ="dark-profile"/>
            <View style={styles.content}>
                <Text style={styles.chatDate}>Senin, 25 Juli 2021</Text>
                <ChatItem isMe/>
                <ChatItem/>
                <ChatItem isMe/>
            </View>
            <InputChat/>
        </View>
    )
}

export default Chatting

const styles = StyleSheet.create({
    chatDate:{
        fontFamily: fonts.primary.normal,
        fontSize: 11,
        color: colors.text.secondary,
        marginVertical: 20,
        textAlign: 'center'
    },
    page:{
        backgroundColor: colors.white,
        flex:1
    },
    content:{
        flex:1,
        backgroundColor:colors.white
    }
})
