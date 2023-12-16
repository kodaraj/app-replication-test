import React, { useState } from 'react'
import { Dimensions, View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import { Button, IconButton } from '../components/button'

export const Screen = ({ onBack, title, children }) => (
  <SafeAreaView style={{ flex: 1 }}>
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ paddingVertical: 20 }}>
      {!!title && <Text style={styles.title}>{title}</Text>}
      {children}
    </ScrollView>
    <IconButton icon="clear" onPress={onBack} holderStyle={styles.close} />
  </SafeAreaView>
)

export const AppToolbar = ({ children }) => (
  <View style={{ height: 78, alignItems: "center", justifyContent: "center", backgroundColor: "#D60047" }}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "#BCA870", fontSize: 18, fontWeight: "bold", textAlign: 'center', marginVertical: 20 },
  close: {
    position: "absolute", top: 30, right: 20
  }
})