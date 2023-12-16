import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { MaterialIcons } from 'zuppler-vector-icons'

export const Button = ({ onPress, title, primary, style }) => (
  <TouchableOpacity {...{ onPress }}>
    <View style={[styles.button, primary && styles.buttonPrimary, style]}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  </TouchableOpacity>
)

export const IconButton = ({ onPress, icon, color = "#000", style, holderStyle }) => (
  <TouchableOpacity {...{ onPress }} style={holderStyle}>
    <View style={[styles.buttonIcon, style]}>
      <MaterialIcons name={icon} color={color} size={24} />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  title: { color: "#D60047", fontSize: 48, fontWeight: "bold" },
  button: {
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: '#0887c1',
    margin: 5,
    borderWidth: 0,
    borderColor: "#000",
    borderRadius: 20
  },
  buttonPrimary: {
    backgroundColor: '#0887c1',
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff"
  },
  buttonIcon: {
    backgroundColor: 'rgba(240,240,240,0.8)',
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  }
})