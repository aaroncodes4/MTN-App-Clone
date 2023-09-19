import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useLayoutEffect} from 'react'
import { useNavigation } from "@react-navigation/native"
import colors from '../components/Color'
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Carousel from '../components/Carousel';

const HomeScreen = () => {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: true, 
            title: "Home",
            headerTitleStyle: {
                fontSize: 16,
                fontWeight: 600,
                color: "#000"
            },
            headerStyle: {
                backgroundColor: colors.primary,
                height: 110,
            },
            headerTitleAlign: 'center',
            // headerleft
            headerLeft: () => (
                <TouchableOpacity>
                    <Entypo name="medium-with-circle" size={34} color="black" style={{marginLeft: 18}}/>
                </TouchableOpacity>
            ),

            // headerRight
            headerRight: () => (
                <TouchableOpacity>
                    <Entypo name="menu" size={34} color="#000" style={{marginRight: 18}}/>
                </TouchableOpacity>
            )
        })
    })
  return (
    <View>
    <ScrollView>
        
        <View style={{backgroundColor: '#fff', marginBottom: 10, paddingBottom: 10}}>
            <View style={{flexDirection: 'row', gap: 10, justifyContent: 'center', marginVertical: 20}}>
                <Text style={{fontSize: 22, fontStyle: 'italic', fontWeight: 800}}>Y'ello</Text>
                <Text style={{fontSize: 22, fontWeight: 500}}>Aaron</Text>
            </View>
            <Carousel/>
        </View>
        <View style={{marginHorizontal: 18,}}>
            {/* sections */}
            <View>
                {/* airtime */}
                <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', gap: 50, backgroundColor: '#fff', paddingHorizontal: 20, paddingVertical: 10, marginBottom: 10}}>
                    <View style={{flexDirection: 'column', gap: 10, alignItems: 'center', width: 50}}>
                        <Text style={{fontSize: 10, fontWeight: 'light'}}>Airtime</Text>
                        <MaterialIcons name="phone-android" size={34} color="#ffd700" />
                    </View>
                    <View style={{flexDirection: 'column', gap: 10}}>
                        <Text style={{fontSize: 22, fontWeight: 700, color: colors.secondary}}>GHc12.20</Text>
                        <View style={{flexDirection: 'row', gap: 30}}>
                            <Text style={{fontSize: 16, fontWeight: 600}}>Bonus</Text>
                            <Text style={{fontSize: 13}}>GHc0.00</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* data */}
                <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', gap: 50, paddingHorizontal: 20, paddingVertical: 10,  backgroundColor: '#fff',  marginBottom: 10}}>
                    <View style={{flexDirection: 'column', gap: 10, alignItems: 'center', width: 50}}>
                        <Text style={{fontSize: 10, fontWeight: 'light'}}>Data</Text>
                        <Entypo name="signal" size={34} color="#ffd700" />
                    </View>
                    <View style={{flexDirection: 'column', gap: 10}}>
                        <Text style={{fontSize: 22, fontWeight: 700, color: colors.secondary}}>3.40 GB</Text>
                        <View style={{flexDirection: 'row', gap: 30}}>
                            <Text style={{fontSize: 16, fontWeight: 600}}>Bonus</Text>
                            <Text style={{fontSize: 13}}>0.00 MB</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* sms */}
                <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', gap: 50, paddingHorizontal: 20, paddingVertical: 10,  backgroundColor: '#fff',  marginBottom: 10}}>
                    <View style={{flexDirection: 'column', gap: 10, alignItems: 'center', width: 50}}>
                        <Text style={{fontSize: 10, fontWeight: 'light'}}>SMS</Text>
                        <AntDesign name="message1" size={34} color="#ffd700" />
                    </View>
                    <View style={{flexDirection: 'column', gap: 10}}>
                        <Text style={{fontSize: 22, fontWeight: 700, color: colors.secondary}}>1255 SMS</Text>
                        <View style={{flexDirection: 'row', gap: 30}}>
                            <Text style={{fontSize: 16, fontWeight: 600}}>Bonus</Text>
                            <Text style={{fontSize: 13}}>0 SMS</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* voice */}
                <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', gap: 50, paddingHorizontal: 20, paddingVertical: 10,  backgroundColor: '#fff',  marginBottom: 10}}>
                    <View style={{flexDirection: 'column', gap: 10, alignItems: 'center', width: 50}}>
                        <Text style={{fontSize: 10, fontWeight: 'light'}}>Voice</Text>
                        <FontAwesome name="microphone" size={34} color="#ffd700" />
                    </View>
                    <View style={{flexDirection: 'column', gap: 10}}>
                        <Text style={{fontSize: 22, fontWeight: 700, color: colors.secondary}}>84 Minutes</Text>
                        <View style={{flexDirection: 'row', gap: 30}}>
                            <Text style={{fontSize: 16, fontWeight: 600}}>Bonus</Text>
                            <Text style={{fontSize: 13}}>0.00 Min</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* broadband */}
                <TouchableOpacity style={{flexDirection:'row', alignItems: 'center', gap: 50, paddingHorizontal: 18, paddingVertical: 10, backgroundColor: '#fff',  marginBottom: 10}}>
                    <View style={{flexDirection: 'column', gap: 10, alignItems: 'center', width: 50}}>
                        <Text style={{fontSize: 10, fontWeight: 'light'}}>Broadband</Text>
                        <MaterialCommunityIcons name="wifi-alert" size={30} color="#ffd700" />
                    </View>
                    <View style={{flexDirection: 'column', gap: 10}}>
                        <Text style={{fontSize: 18, fontWeight: 700, color: colors.secondary}}>Get Broadband</Text>
                        <View style={{flexDirection: 'row', gap: 30, alignItems: 'center'}}>
                            <Text style={{fontSize: 16, fontWeight: 600}}>Connect to the fastest speed</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            {/* end of sectioins */}
            <View style={{marginBottom: 20}}>
                <Text style={{fontSize: 14, fontWeight: 600, marginVertical: 10}}>Popular bundle</Text>
                <TouchableOpacity style={{backgroundColor: '#fff', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 10, paddingHorizontal: 20}}>
                    <View style={{flexDirection: 'column', gap: 5}}>
                        <Text style={{fontSize: 18, fontWeight: 700, color: colors.secondary}}>406.61 MB</Text>
                        <View style={{backgroundColor: colors.secondary, width: 70, borderRadius: 10}}>
                            <Text style={{fontSize: 8, fontWeight: 400, color: '#fff', padding: 5}}>Stay Connected</Text>
                        </View>
                    </View>
                    <View style={{borderColor: colors.secondary, borderWidth: 2, borderRadius: 10}}>
                        <Text style={{paddingHorizontal: 16, paddingVertical: 4, color: colors.secondary, fontWeight: 700, fontSize: 16}}>GHc 3</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    </ScrollView>
        <Pressable style={{position: 'absolute', right: 0,height: 80, bottom: 100, backgroundColor: colors.secondary}}>
            <View style={{flexDirection: 'column', alignItems: 'center', gap: -17}}>
                <MaterialCommunityIcons name="chat-question-outline" size={24} color="#fff" style={{paddingVertical: 20, paddingHorizontal: 15}}/>
                <Text style={{fontSize: 10, color: '#fff', textAlign: 'center'}}>Help</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})