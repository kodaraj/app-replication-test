import React from 'react';
import * as Linking from 'expo-linking'
import { View } from 'react-native';
import PortalApp, { RestaurantApp, setAppConfig, setCustomTranslator } from "@zuppler/native-online-ordering-4";

// TODO: update the channel permalink
const channelUrl = "http://api.zuppler.com/v3/channels/sliceofitaly.json";

// TODO: update integration and restaurantId for Single Restaurant app
// Not needed for Portal apps
const integration = "demorestaurantapp";
const restaurantId = 242;

const fonts = Platform.select({
  ios: {
    "fonts-heading": "HelveticaNeue-CondensedBold",
    "fonts-body": "Helvetica Neue",
    "fonts-deco": "Helvetica Neue"
  },
  android: {
    "fonts-heading": "sans-serif-condensed",
    "fonts-body": "Roboto",
    "fonts-deco": "Roboto"
  }
});

const svc = {
  "api5-restaurants-svc": "//restaurants-api5.zuppler.com",
  "api5-carts-svc": "//carts-api.zuppler.com",
  "api5-orders-svc": "//orders-api5.zuppler.com",
  "api5-feedback-svc": "//feedback.zuppler.com",
  "api5-payments-svc": "//payments-api.zuppler.com",
  "api5-accounts-svc": "//accounts-api5.zuppler.com",
  "api5-loyalty-svc": "//zuppler-loyalty-api.zuppler.com",
}

let appUrl = Linking.createURL();
if(/\/\/$/.test(appUrl)) {
  appUrl = appUrl + "ordering"
} else if(/:19000$/.test(appUrl)) {
  appUrl = appUrl + "/--"
}

// TODO: tune appConfig
setAppConfig({
  locale: "en",

  "portal-services": "PICKUP, DELIVERY, CURBSIDE",
  // "portal-slices": "Service[3,12]|Search[6,12](Name,Location,Cuisines,Address)|Queries[12]|Restaurants[12](Compact)",
  "portal-slices": "Service[3,12]|Restaurants[12](Compact)",
  "portal-navbar": "true",
  "portal-restore-last-location": false,
  "branding": "multi",
  
  "colors-background": "#fff",
  "colors-highContrast": "#000000",
  "colors-midContrast": "#666666",
  "colors-lowContrast": "#999999",
  "colors-brand": "#D14041",

  ...fonts,
  ...svc,
  "app-url": appUrl,
  "show-back-to-home": true
});

const Zuppler = ({active = true, initZupplerBridge, initPushNotifications}) =>
  <View style={[{flex:1}, !active && {display: 'none'}]}>
    <PortalApp {...{ channelUrl, initZupplerBridge, initPushNotifications }} />
  </View>

export default Zuppler;