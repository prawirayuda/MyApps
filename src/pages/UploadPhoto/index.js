import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { useState } from 'react/cjs/react.development';
import { IconAddPhoto, IconRemovePhoto, INulPhoto } from '../../assets';
import {Button, Gap, Header, Link} from '../../components';
import { colors, fonts } from '../../utils';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';


const UploadPhoto = ({navigation}) => {
    const options = {
        storageOption:{
            path: 'images',
            mediaType:'photo'
        },
        includeBase64:true,
    } 

const [hasPhoto, sethasPhoto] =useState (false)
const [photo,setPhoto] = useState(INulPhoto)

// const getImage =() => {
//     launchImageLibrary(options, response => {
//         const source = {uri: response.uri}
//         setPhoto(source)
//         sethasPhoto(true)
//         console.log('responnya adalah: ', response.error)
//     })
// }
const getImage =() => {
    launchCamera(options, response => {
        console.log('responsenya : ', response)
        if (response.didCancel){
            console.log('User gk jadi ambil poto')
        } else if (response.error){
            console.log('eror picker : ' ,response.error)
        } else if (response.customButtom){
            console.log('user tap buttom : ', response.customButtom)
        } else {

            const source = {uri: response.uri}
            setPhoto(source)
            sethasPhoto(true)
        }
        // console.log('responnya adalah: ', response.errorCode)
    })
}



    return (
        <View style={styles.page}>
            <Header title="Upload Photo"/>
            <View style={styles.content}> 
                <View style={styles.profile}>
                    <TouchableOpacity style ={styles.avatarWrapper} onPress={getImage}>
                        <Image source={photo} style= {styles.avatar}/>
                        {hasPhoto && <IconRemovePhoto style={styles.addPhoto}/>}
                        {!hasPhoto && <IconAddPhoto style={styles.addPhoto}/> }
                            
                    </TouchableOpacity>
                    <Text style={styles.name}>Muhammad Ali Ghani</Text>
                    <Text style={styles.profesi}> Athlete PB</Text>                
                </View>   
                <View>
                    <Button disable={!hasPhoto} title="Upload & Continue" onPress={() => navigation.replace('MainApp')}/>
                    <Gap height={30}/>
                    <Link title="skip for this" align="center" size={16} onPress={() => navigation.replace('MainApp')}/>
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
        height:110,
        borderRadius:1100/2
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

