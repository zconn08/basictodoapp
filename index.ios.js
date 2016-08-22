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
var NewItemScene = require('./application/components/NewItemScene');

class Wandergram extends Component {
  renderScene(route, navigator) {
    var Component = route.component;
    return (<Component navigator={navigator} />);
  }

  render() {
    return (
      <Navigator
        initialRoute={{ component: EntryScene}}
        renderScene={this.renderScene}
      />
    );
  }
}

AppRegistry.registerComponent('Wandergram', () => Wandergram);
