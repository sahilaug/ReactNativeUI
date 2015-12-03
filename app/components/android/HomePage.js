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
  goBack: function() {
    var navigator = this.props.navigator;
    navigator.pop();
  },
  render: function() {
    return (
      <View style={styles.homepage}>
        <ToolbarAndroid
        actions={toolbarActions}
        style = {styles.toolbar}
        title="React"
        navIcon = {require('../../../images/reactIcon.png')}
        onIconClicked = {this.goBack}
        rtl = {false}
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
  {title: 'Create'},
  {title: 'Filter'},
  {title: 'Settings'}
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