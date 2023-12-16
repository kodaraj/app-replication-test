module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ["module-resolver", {
        root: ["./"],
        alias: {
          "zuppler-vector-icons": "@expo/vector-icons",
          "zuppler-bugsnag": "@bugsnag/expo"
        }
      }]
    ]
  };
};
