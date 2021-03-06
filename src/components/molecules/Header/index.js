import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fonts } from '../../../utils';
import { colors } from '../../../utils/colors';
import { Button, Gap } from '../../atoms';
import DarkProfile from './DarkProfile';

const Header = ({onPress, title, type}) => {
    if (type === 'dark-profile') {
        return <DarkProfile onPress={onPress}/>
    }
    return (
        <View style={styles.container(type)}>
            <Button type="icon-only" icon={type === 'dark' ? 'back-light' : 'back-dark'} onPress={onPress}/>
            <Text style={styles.text(type)}>{title}</Text>
            <Gap width={24}/>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container : (type) => (
        {
            paddingHorizontal: 16,
            paddingVertical:30,
            backgroundColor:type === 'dark' ? colors.secondary : colors.white,
            flexDirection:'row',
            alignItems:'center',
            borderBottomRightRadius : type === 'dark' ? 20 :0,
            borderBottomLeftRadius : type === 'dark' ? 20 :0,
            
        }
    ),
    text: type => (
        {
        textAlign:'center',
        flex:1,
        color: type === 'dark' ? colors.white : colors.text.primary,
        fontFamily:fonts.primary[700],
        }) 
})
