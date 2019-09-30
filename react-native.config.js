module.exports = {
  project: {
    ios: {},
    android: {
        packageImportPath: 'import com.sudoplz.reactnativeamplitudeanalytics.RNAmplitudeSDKPackage;',
        packageInstance: 'new RNAmplitudeSDKPackage((Application) getApplicationContext())',
    },
  },
};
