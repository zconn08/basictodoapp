import React, { Component } from 'react';
import {
  Text,
  TextInput
} from 'react-native';
var styles = require('../styles/styles');

class NewItemInput extends Component {
  render(){
    return(
      <TextInput
        ref='new-item'
        style={[styles.toDoItem, styles.toDoInput]}
        placeholder='Add a new to-do...'
        onSubmitEditing={() => this.props.addToDo()}
        />
    );
  }
}

module.exports = NewItemInput
