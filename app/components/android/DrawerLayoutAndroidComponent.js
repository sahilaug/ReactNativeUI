'use-strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  DrawerLayoutAndroid,
  Text,
  View
} = React;

class DrawerLayoutAndroidComponent extends React.Component{
  render() {
    var navigationView = (
       <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!
      </Text>
    </View>
    );
    return (
      <DrawerLayoutAndroid
       drawerPosition = {DrawerLayoutAndroid.positions.Right}
       drawerWidth = {200}
       renderNavigationView = {() => navigationView}>
      </DrawerLayoutAndroid>
    );
  }
}

module.exports = DrawerLayoutAndroidComponent;
