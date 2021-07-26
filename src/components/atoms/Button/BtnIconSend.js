import React from 'react'
import { StyleSheet, View } from 'react-native'
import { SendIconDark, SendIconLight } from '../../../assets'
import { colors } from '../../../utils'

const BtnIconSend = ({disable}) => {
    return (
        <View style={styles.container(disable)}>
            {disable && <SendIconDark/>}
            {!disable && <SendIconLight/>}
            
        </View>
    )
}

export default BtnIconSend

const styles = StyleSheet.create({
    container: (disable) =>(
        {
            backgroundColor: disable ? colors.pudar :colors.tertiary,
            width: 45,
            height:45,
            borderRadius:10,
            paddingTop: 3,
            paddingRight:3,
            paddingBottom:8,
            paddingLeft: 8
    
        }
    )
})
