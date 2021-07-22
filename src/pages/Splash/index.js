import React from 'react';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ilogo } from '../../assets/illustration';
import { colors } from '../../utils/colors';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('GetStarted')
        },3000)

    }, [])
    return (
        <View style={styles.page}>
            <Ilogo/>
            <Text style={styles.title}>Appku</Text>
          </View>
    );
};

export default Splash;

const styles = StyleSheet.create({
    page: {
        backgroundColor:colors.white, 
        flex:1, 
        alignItems:'center', 
        justifyContent:'center',
    },
    title:{
        fontSize: 20, 
        color: colors.text.primary, 
        marginTop:20,
        }
});
