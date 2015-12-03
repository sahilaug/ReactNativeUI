/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var DrawerLayoutAndroidComponent = require('./app/components/android/DrawerLayoutAndroidComponent');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator
} = React;

class reactNativieUI extends React.Component{

  render() {
    return (
      <Navigator
        initialRoute={{id:"FirstPage",name: 'My First Scene'}}
        renderScene={this.renderScene.bind(this)}
      ></Navigator>
    );
  }

  renderScene(route, navigator) {
    console.log(route.id );
    var routeId = route.id;
    return  ( <DrawerLayoutAndroidComponent navigator={navigator}/> );
    //return <View><Text>Yo</Text></View>

  }
}


AppRegistry.registerComponent('reactNativieUI', () => reactNativieUI);
