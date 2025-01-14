import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { StatusBar } from 'expo-status-bar';
import { Octicons } from '@expo/vector-icons';


export default function signIn() {
  return (
    <View className="flex-1">
        <StatusBar style="dark" />
        <View style={{paddingTop: hp(8), paddingHorizontal: wp(5)}} className="flex-1 gap-1 ">
            <View className=" items-center">
                <Image style ={{height: hp(25)}} resizeMode='contain' source={require('../assets/images/login-page.jpg')} />
        </View>
        
        <View className="gap-10">
        <Text style={{fontSize: hp(4)}} className='font-bold tracking-wider text-center text-neutral-800'>
            Sign In
        </Text>
        {/* inputs */}
        <View className="gap-4">
        <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
          <Octicons name="mail" size={hp(2.7)} color="gray" />
          <TextInput 
          style={{fontSize: hp(2)}} 
          className="flex-1 font-semibold text-neutral-700"
          placeholder='Email Address'
          placeholderTextColor={'gray'}
          />
          </View>

          <View className="gap-4">

          <View style={{height: hp(7)}} className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl">
          <Octicons name="lock" size={hp(2.7)} color="gray" />
          <TextInput 
          style={{fontSize: hp(2)}} 
          className="flex-1 font-semibold text-neutral-700"
          placeholder='Password'
          placeholderTextColor={'gray'}
          />
          </View>

          <Text style={{fontSize: hp(1.8)}} className="font-semibold text-right text-neutral-500">Forgot Passsword</Text>

          </View>

          <TouchableOpacity style={{height: hp(6.5), backgroundColor: 'indigo',borderRadius: 15, justifyContent: 'center', alignItems: 'center'  }} >
          <Text style={{fontSize: hp(2.5)}} className="text-white font-bold tracking-wider">
                Sign In
                </Text>
                
          </TouchableOpacity>

         </View >
        
    
</View>
    </View>
    </View>
  )
}