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

class HomeScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ['Eat Pizza', 'Go to Store']
    };
  }

  addToDo() {
    var items = this.state.items;
    var newItem = this.refs["new-item"];
    var text = newItem._lastNativeText;
    items.push(text);
    this.setState({items: items});
    newItem.clear();
  }
  //
  // moveToCreate() {
  //   this.props.navigator.push({
  //     title: 'NewItemScene'
  //   });
  // }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.state.items);
    return (
      <View style={styles.toDoContainer}>
        <Text style={styles.toDoHeader}>My To-Do List</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData) => <Text style={styles.toDoItem}>{rowData}</Text>}
        />
        <TextInput
          ref='new-item'
          style={{height: 60}}
          placeholder='Add a new to-do...'
          onSubmitEditing={(text) => this.addToDo(text)}
        />
      </View>
    );
  }
}
// <TouchableHighlight style={styles.button} onPress={this.moveToCreate.bind(this)} underlayColor='steelblue'>
//   <Text style={styles.buttonText}>Create a New Todo</Text>
// </TouchableHighlight>

module.exports = HomeScene
