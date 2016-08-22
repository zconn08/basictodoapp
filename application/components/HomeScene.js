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
      items: [
        {txt:'Eat Pizza', completed: false},
        {txt:'Go to Store', completed: false}
      ]
    };
  }

  addToDo() {
    var items = this.state.items;
    var newItem = this.refs["new-item"];
    var text = newItem._lastNativeText;
    items.push({txt: text, completed: false});
    this.setState({items: items});
    newItem.clear();
  }
  deleteToDo(rowID) {
    var items = this.state.items;
    var idx = parseInt(rowID);
    items.splice(idx, idx + 1);
    this.setState({items: items});
  }
  changeStatus(rowID){
    var items = this.state.items;
    var idx = parseInt(rowID);
    var status = items[idx].completed;
    items[idx].completed = status ? false : true;
    this.setState({items: items});
  }

  render() {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var dataSource = ds.cloneWithRows(this.state.items);
    return (
      <View style={styles.toDoContainer}>
        <Text style={styles.toDoHeader}>My To-Do List</Text>
        <ListView
          dataSource={dataSource}
          renderRow={(rowData, sectionID, rowID) =>
            <Text
              style={[styles.toDoItem, rowData.completed && styles.completed]}
              onPress={() => this.changeStatus(rowID)}
              onLongPress={() => this.deleteToDo(rowID)}>
              {rowData.txt}
            </Text>
          }
        />
        <TextInput
          ref='new-item'
          style={styles.toDoInput}
          placeholder='Add a new to-do...'
          onSubmitEditing={(text) => this.addToDo(text)}
        />
      </View>
    );
  }
}

module.exports = HomeScene
