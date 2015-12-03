'use-strict';

var React = require('react-native');

var {
  View,
  Text,
  StyleSheet,
  ToolbarAndroid,
  ScrollView
} = React;

var HomePageComponent = React.createClass({
  render: function() {
    return (
      <View style={styles.homepage}>
        <ToolbarAndroid
        actions={toolbarActions}
        style = {styles.toolbar}
        title="React"
        >
        </ToolbarAndroid>
        <ScrollView
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.scrollView}>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
          <Text>This is REACT NATIVE for Android Homepage</Text>
        </ScrollView>
      </View>
    );
  }

});

var toolbarActions = [
  {title: 'DrawerLayoutAndroid'},
  {title: 'Image'},
  {title: 'ListView'},
  {title: 'MapView'},
  {title: 'Modal'},
  {title: 'Navigator'},
];

var styles = StyleSheet.create({
  homepage: {
    flex:1,
    backgroundColor: '#E1F6FF'
  },
  toolbar: {
    height: 56,
    backgroundColor: '#FFFFFF',
  }

});

module.exports = HomePageComponent;