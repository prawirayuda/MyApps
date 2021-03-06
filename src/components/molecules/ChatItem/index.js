import React from 'react'
import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../../utils'
import Other from './Other'
import IsMe from './IsMe'

const ChatItem = ({isMe}) => {
    if (isMe) {
        return <IsMe/>
    }
    return <Other/>
}

export default ChatItem

const styles = StyleSheet.create({
    container:{

        marginBottom:20,
        alignItems:'flex-end',
        paddingRight:16
    },
    chatContent:{
        maxWidth:'70%',
        padding: 12, 
        paddingRight:18,
        backgroundColor:colors.cardLight,
        borderRadius:10,
        borderBottomRightRadius:0,
        // backgroundColor:'red'
    },
    text:{
        fontSize:14,
        fontFamily:fonts.primary.normal,
        color:colors.text.primary
    },
    date:{
        fontSize:11,
        fontFamily: fonts.primary.normal,
        color:colors.text.secondary,
        marginTop:8
    }
})
