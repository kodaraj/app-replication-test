import React, {useState, useEffect, useCallback} from 'react';
import { View } from 'react-native';
import Zuppler from './screens/zuppler'
import { Homepage } from './screens/home'
import Version from 'components/version'
import useUpdates from 'components/use-updates'
import * as SplashScreen from 'expo-splash-screen'

const NativeApp = () => {
  useUpdates()
  const [ screen, setScreen ] = useState("homepage")

  const [userToken, setUserToken] = useState(null)
  const [notification, setNotification] = useState(null)
  const [ zupplerBridge, setZupplerBridge ] = useState(null)
  
  useEffect(() => {
    SplashScreen.preventAutoHideAsync()
  }, []);

  const initPushNotifications = (userToken, notification) => {
    setUserToken(userToken)
    setNotification(notification)
  }

  // change 1 number with build number, leave PN in place
  // this lets us know if push notifications are enabled
  const version =!!userToken ? "(1) PN" : "(1)"

  const initZupplerBridge = (api) => {
    api.addIntegrationStateListener(onIntegrationChanged)
    setZupplerBridge(api)
    setTimeout(SplashScreen.hideAsync, 100);
    return Promise.resolve(true)
  }
  
  const onIntegrationChanged = (type, params) => {
    // console.log('BSDBG: integrationChanged', type, params)
    if(type === 'home') {
      setScreen('homepage')
    }
  }

  const onOpenRewardsPage = () => {
    // zupplerBridge.setPage("/about-loyalty")
    zupplerBridge.setPage("/restaurants/sliceofitaly/782/about-loyalty")
    setScreen("zuppler")
  }
  
  return (
    <View style={{flex:1}}>
      { screen == "homepage" && <Homepage onStartOrdering={() => setScreen("zuppler")} openRewardsPage={onOpenRewardsPage} /> }
      <Zuppler {...{initZupplerBridge, initPushNotifications}} active={screen == "zuppler"} />
      <Version label={version}/>
    </View>
  )
}

export default NativeApp;