import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { DoctorCategory, HomeProfile,RatedDoctor,NewsItem, Gap } from '../../components'
import { colors, fonts } from '../../utils'
import { JSONCategoryDoctor,DummyDoctor1 } from '../../assets'

const Doctor = ({navigation}) => {
    return (
        <View style={styles.page}>

                <View style ={styles.content}>
                    <ScrollView vertical showsVerticalScrollIndicator={false}>
                    <Gap height={30}/>
                        <View style={styles.wrapperSection}>
                            <HomeProfile onPress ={() => navigation.navigate('UserProfile')}/>
                            <Text style={styles.welcome}>Mau Cari Apa ?? jangan ragu !!</Text>
                            </View>
                        
                        <View style={styles.wrapperScroll}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                                <View style ={styles.container}>
                                <Gap width={32}/>
                                {JSONCategoryDoctor.data.map(item => {
                                    return <DoctorCategory 
                                    key={item.id} 
                                    category={item.category}
                                    onPress={()=> 
                                        navigation.navigate('ChooseDoctor')
                                    }/>
                                })}
                                <Gap width={22}/>
                                </View> 
                            </ScrollView>    
                        </View>
                        <View style={styles.wrapperSection}>
                            <Text style={styles.sectionLabel}>Rated Dokter</Text>
                            <RatedDoctor name="Alexa Rachel" desc="Obat" avatar={DummyDoctor1} onPress={() => navigation.navigate('DoctorProfile')}/>
                            <RatedDoctor name="Ghanii" desc="Dalam" avatar={DummyDoctor1} onPress={() => navigation.navigate('DoctorProfile')}/>
                            <RatedDoctor name="Radit" desc="Sae" avatar={DummyDoctor1} onPress={() => navigation.navigate('DoctorProfile')}/>

                        
                        <Text style={styles.sectionLabel}>Berita Terkini</Text>
                        <NewsItem/>
                        <NewsItem/>
                        <NewsItem/>
                        <Gap height={30}/>
                        </View>
                    </ScrollView>
                </View>


                        

        </View>
    )
}

export default Doctor

const styles = StyleSheet.create({
    page : {

        backgroundColor:colors.secondary,
        flex:1
    },
    welcome:{
        fontSize:20,
        fontFamily: fonts.primary[600],
        color:colors.text.primary,
        marginBottom:16,
        marginTop:30,
        maxWidth:200
    },
    container:{
        flexDirection:'row'
    },
    wrapperScroll:{
        marginHorizontal: -12
    },
    content:{
        backgroundColor: colors.white,
        flex:1,
        // paddingHorizontal:16,
        borderBottomLeftRadius:20,
        borderBottomRightRadius :20
    },
    sectionLabel:{
        fontSize: 16,
        fontFamily:fonts.primary[600],
        color:colors.text.primary,
        marginTop:30,
        marginBottom:16,
        
    },
    wrapperSection:{
        paddingHorizontal: 16
    }
})
