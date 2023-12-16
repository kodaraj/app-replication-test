const {
  WarningAggregator,
  withAppBuildGradle,
} = require("@expo/config-plugins");

const withAndroidApplicationId = (config, props) => {
  return withAppBuildGradle(config, (config) => {
    if (config.modResults.language === "groovy") {
      const nameReg = new RegExp(`applicationId 'com.zuppler.${props.appSuffix}'`)
      const validName = `applicationId 'com.zuppler.native.${props.appSuffix}'`
      config.modResults.contents = config.modResults.contents.replace(
        nameReg,
        validName
      )
      WarningAggregator.addWarningAndroid(
        "bypass-package-name-restrictions",
        config.modResults.contents
      );
    } else {
      WarningAggregator.addWarningAndroid(
        "bypass-package-name-restrictions",
        `Cannot automatically configure app build.gradle if it's not groovy`
      );
    }
    return config;
  });
};

module.exports = withAndroidApplicationId;