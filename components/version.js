import React, { useEffect, useState, useRef } from 'react'
import { Text, View, TouchableOpacity } from "react-native"

import pck from '../package.json'
let ZupplerVersion, expoVersion = ""

try {
  ZupplerVersion = pck.dependencies["@zuppler/native-online-ordering-4"] 
  expoVersion = pck.dependencies["expo"] 
} catch(e){}

export default function Version({label}) {
  const [ visible, setVisible ] = useState(true)

  useEffect(() => {
    setTimeout(() => setVisible(false), 3000)
  }, [])

  return (
    <>
      {visible && (
        <View style={{position:"absolute", bottom: 90, right: 0, backgroundColor: "#fff", paddingHorizontal: 10, borderTopLeftRadius: 15, borderBottomLeftRadius: 15}}>
          <Text style={{fontSize: 12, color: "#666", lineHeight: 20}}>{ZupplerVersion} {label} {expoVersion}</Text>
        </View>
      )}
      <TouchableOpacity onLongPress={() => setVisible(true)} onPressOut={() => setVisible(false)} style={{position: "absolute", right: 0, bottom: 0, width: 10, height: 77, backgroundColor: "transparent" }}>
      </TouchableOpacity>
    </>
  )
}