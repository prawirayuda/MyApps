import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { colors } from '../../../utils/colors'

const Link = ({title,size,align,onPress }) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={styles.text(size, align)}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Link

const styles = StyleSheet.create({
    text: (size,align) => (
        {
            fontFamily: 'Montserrat-Regular',
            fontSize: size,
            color: colors.text.secondary,
            textDecorationLine:'underline',
            textAlign:align,
        }
    ) 
})
