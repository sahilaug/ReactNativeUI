/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DrawerLayoutAndroidComponent = require('./app/components/android/DrawerLayoutAndroidComponent');
var HomePageComponent = require('./app/components/android/HomePage');
var SplashScreenComponent = require('./app/components/commons/SplashScreen');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} = React;

class reactNativieUI extends React.Component{

  render() {
    return (
      <Navigator
        initialRoute={{id:"SplashScreen"}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromLeft;
        }} />
    );
  }

  renderScene(route, navigator) {
    console.log(route.id );
    var routeId = route.id;
    if(routeId === 'SplashScreen'){
      return ( <SplashScreenComponent navigator={navigator}/> );
    } else if(routeId === 'DrawerLayoutAndroid'){
      return  ( <DrawerLayoutAndroidComponent navigator={navigator}/> );
    } else if(routeId === 'HomePageComponent'){
      return  ( <HomePageComponent navigator={navigator}/> );
    }
  }
}


AppRegistry.registerComponent('reactNativieUI', () => reactNativieUI);
