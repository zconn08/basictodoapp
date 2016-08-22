import React from 'react';
import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#125688',
    padding: 20
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'white'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  toDoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    padding: 20
  },
  backButton: {
    height: 30,
    width: 60,
    backgroundColor: 'red',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
  },
  toDoItem: {
    fontSize: 30
  },
  toDoHeader: {
    fontSize: 40,
    borderBottomColor: 'black'
  }
});

module.exports = styles;
