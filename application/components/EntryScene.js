import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Navigator,
  ListView,
  TextInput
} from 'react-native';
var styles = require('../styles/styles')
var HomeScene = require('./HomeScene');

class EntryScene extends Component {
  moveToHome() {
    this.props.navigator.push({
        component: HomeScene
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
