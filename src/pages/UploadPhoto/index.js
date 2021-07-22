import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { IconAddPhoto, INulPhoto } from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import { colors, fonts } from '../../utils';

const UploadPhoto = () => {
    return (
        <View style={styles.page}>
            <Header title="Upload Photo"/>
            <View style={styles.content}> 
                <View style={styles.profile}>
                    <View style ={styles.avatarWrapper}>
                        <Image source={INulPhoto} style= {styles.avatar}/>
                        <IconAddPhoto style={styles.addPhoto}/>                
                    </View>
                    <Text style={styles.name}>Muhammad Ali Ghani</Text>
                    <Text style={styles.profesi}> Athlete PB</Text>                
                </View>   
                <View>
                    <Button title="Upload & Continue"/>
                    <Gap height={30}/>
                    <Link title="skip for this" align="center" size={16}/>
                </View>
            </View>
        </View>
    )
}

export default UploadPhoto

const styles = StyleSheet.create({
    content:{
        paddingHorizontal:40,
        flex:1,
        justifyContent:'space-between',
        paddingBottom:40,
    },
    avatar: {
        width :110,
        height:110
    },
    avatarWrapper: {
        width:130,
        height:130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130/2,
        alignItems:'center',
        justifyContent:'center'
    },
    page :{
        backgroundColor: colors.white,
        flex:1
    },
    addPhoto:{
        position:'absolute',
        bottom: 8,
        right:6
    },
    name: {
        fontSize: 20,
        color: colors.text.primary,
        fontFamily: fonts.primary[600],
        textAlign:'center'   
    },
    profesi:{
        fontSize:15,
        fontFamily: fonts.primary.normal,
        textAlign:'center',
        color:colors.text.secondary,
        marginTop: 4
    },
    profile:{
        alignItems:'center',

        flex:1,
        justifyContent:'center'

    }

})

