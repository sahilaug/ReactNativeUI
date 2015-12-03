'use-strict';

var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Image
} = React;

class SplashScreenComponent extends React.Component{

   componentWillMount() {
    var navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'HomePageComponent',
      });
    }, 3000);
  }

  render() {
    return (
      <View style = {styles.splashScreen} >
        <Text style={styles.heading}> React Native UI </Text>
        <Image source={require('../../../images/reactIcon.png')} style = {styles.logo}></Image>
      </View>
    );
  }

}

var styles = StyleSheet.create({
  splashScreen: {
    flex:1,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  heading: {
    color: '#F5FCFF',
    fontSize: 30,
    fontWeight: "100",
  },
  logo: {
    margin : 15,
    resizeMode: 'cover',
    borderRadius : 10,
    overflow: 'visible',
    opacity: 0.5,
    width: 48,
    height: 48,
    alignSelf: 'center'
  }
});

module.exports = SplashScreenComponent;