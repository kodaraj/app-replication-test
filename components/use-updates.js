import React, { useEffect, useRef } from "react"
import * as Updates from 'expo-updates'
import { Alert } from "react-native"

export default function useUpdates() {
  const listener = useRef(null)

  useEffect(() => {
    listener.current = Updates.addListener(updateListener)
    return () => { listener.current && listener.current.remove() }
  }, [])

  const updateListener = (ev) => {
    if(ev.type === Updates.UpdateEventType.UPDATE_AVAILABLE) {
      Alert.alert( "Update Available!", "The application will now restart with the new improvements and fixes",
        [
          {
            text: "OK",
            onPress: () => { Updates.reloadAsync() }
          }
        ],
        { cancelable: false }
      )
    }
  }

}