import React, { useState } from 'react'
import { Dimensions, View, Text, StyleSheet, Image, ImageBackground, Linking } from 'react-native'
import logo from '../assets/icon.png'

const screen = Dimensions.get("screen")

export default function () {
  return <>
    <Image
      style={{
        width: 140,
        height: 180,
        marginTop: 10,
        alignSelf: 'center'
      }}
      source={logo}
      resizeMode="contain"
    />
    <View style={{ paddingHorizontal: 20 }}>
      <Text style={{ lineHeight: 22, fontSize: 16, fontWeight: '400', lineHeight: 24 }}>
        <Text>
          About us text goes here. 
          Please call <Text onPress={()=>{Linking.openURL('tel:111-111-1111');}} style={{textDecorationLine: "underline",textDecorationStyle: "solid",textDecorationColor: "#000"}}>111-111-1111</Text> for more information!
        </Text>
      </Text>
    </View>
  </>
}