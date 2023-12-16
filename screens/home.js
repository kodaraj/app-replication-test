import React, { useState } from 'react'
import { Dimensions, View, Text, StyleSheet, Image, ImageBackground } from 'react-native'
import bgImage from '../assets/splash.png'
import logo from '../assets/icon.png'
import { Screen } from './others'
import { Button } from '../components/button'
import AboutContent from './about'

export const Homepage = ({ onStartOrdering, openRewardsPage }) => {
  const [screen, setScreen] = useState("home")

  const Home = () => (
    <ImageBackground source={bgImage} style={styles.bg}>
      <View style={styles.center}>
        <View style={styles.holder}>
          <Image source={logo} style={styles.logo} />
          <View style={styles.buttons}>
            <Button title="ORDER NOW" primary onPress={onStartOrdering} style={{ width: 280 }} />
            <Button title="ABOUT US" onPress={() => setScreen("about")} style={{ width: 280 }} />
            <Button title="REWARDS" onPress={openRewardsPage} style={{ width: 280 }} />
          </View>
        </View>
      </View>
    </ImageBackground>
  )

  switch (screen) {
    case 'about':
      return <Screen onBack={() => setScreen("home")}><AboutContent /></Screen>
    default:
      return <Home />
  }
}

const screen = Dimensions.get("screen")

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  holder: { backgroundColor: "rgba(255,255,255,1)", padding: 15, width: screen.width - 40, alignItems: "center", justifyContent: "center", borderRadius: 10 },
  logo: { width: 180, height: 160, resizeMode: 'contain', marginBottom: 10 },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  title: { color: "#D60047", fontSize: 48, fontWeight: "bold" },
  bg: { flex: 1, resizeMode: "cover", justifyContent: "center" }
})