import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Navigator,
  ListView,
  TextInput
} from 'react-native';
var styles = require('../styles/styles');

class EntryScene extends Component {
  moveToHome() {
    this.props.navigator.push({
        title: 'List'
    });
  }
  onBack() {
    this.props.navigator.pop();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>To Do App</Text>
        <TouchableHighlight style={styles.button} onPress={this.moveToHome.bind(this)} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Enter</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = EntryScene
