import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { DummyDoctor1, DummyDoctor2, DummyDoctor3 } from '../../assets'
import { colors, fonts } from '../../utils'
import {ListDoctor} from '../../components'

const Messages = () => {
    const [doctors]= useState([
        {
            id:1,
            profile: DummyDoctor2,
            name:'Alex',
            desc:'dumy dumylallala......'
        },
        {
            id:2,
            profile: DummyDoctor3,
            name:'Ghanioo',
            desc:'syayalalala......'
        },
        {
            id:1,
            profile: DummyDoctor1,
            name:'Sander',
            desc:'cuucucucuucucuc......'
        }
    ])
    return (
        <View style={styles.page}>
            <View style={styles.content}>
                <Text style={styles.title}> Messages</Text>
                {
                    doctors.map(doctor => {
                        return <ListDoctor 
                                key={doctor.key}
                                profile={doctor.profile} 
                                name={doctor.name} 
                                desc={doctor.desc}/>
                    })
                }

            </View>

        </View>
    )
}

export default Messages

const styles = StyleSheet.create({
    page:{
        backgroundColor: colors.secondary,
        flex:1
    },
    content:{
        backgroundColor:colors.white,
        flex:1,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20
    },
    title:{
        fontSize:20,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginLeft:16
    }
})
