### Install dependencies

`npm install --save base-64 react-native-appearance react-native-svg react-native-webview "react-router-native@^5.1.0" "@zuppler/native-online-ordering"`

`npm install --save-dev babel-plugin-module-resolver jetifier`


### Add plugins to babel.config.js
```js
plugins: [
  ["module-resolver", {
    root: ["./"],
    alias: {
      "zuppler-vector-icons": "@expo/vector-icons"
    }
  }]
]
```

## Required changes based on Zuppler package

### v 3.50.0

#### 1. Add Loyalty SVC in zuppler.js
```js
const svc = {
  ...
  "api5-loyalty-svc": "//zuppler-loyalty-api.zuppler.com",
}
```

#### 2. Optionally, if Loyalty is enabled, add `Rewards` button to homepage

In App.js, save a reference to the bridge if there is none already
```js
const [ zupplerBridge, setZupplerBridge ] = useState(null)
```
Then initialize it on `initZupplerBridge` function
```js
setZupplerBridge(api)
```

Create a helper function in App.js
```js
const onOpenRewardsPage = () => {
  // if the plan is attached to the channel directly and we have a portal
  // zupplerBridge.setPage("/about-loyalty")
  
  // for single restaurants...
  zupplerBridge.setPage("/restaurants/sliceofitaly/782/about-loyalty")
  setScreen("zuppler")
}
```
And pass it to the Home component
```js
...<Homepage ... openRewardsPage={onOpenRewardsPage} />
```
Then use it in home.js
```js
<Button title="REWARDS" onPress={openRewardsPage} />
```

---