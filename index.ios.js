/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  ListView,
  TextInput
} from 'react-native';

var styles = require('./application/styles/styles');

var EntryScene = require('./application/components/EntryScene');
var HomeScene = require('./application/components/HomeScene');
var NewItemScene = require('./application/components/NewItemScene');

class Wandergram extends Component {
  renderScene(route, navigator) {
    if(route.title === 'Entry') {
     return (<EntryScene navigator={navigator} />);
    } else if (route.title === 'List') {
     return (<HomeScene navigator={navigator} />);
    }
    // else if (route.title === 'NewItemScene') {
    //  return (<NewItemScene navigator={navigator} />);
    // }
  }

  render() {
    return (
      <Navigator
        initialRoute={{ title: 'Entry'}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('Wandergram', () => Wandergram);
