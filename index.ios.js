/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
const styles = require('./styles.js')

import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAZ6XnUZ4V8SKN7SFalNJkof7LEh4eaVSI",
  authDomain: "mytodo-6fe56.firebaseapp.com",
  databaseURL: "https://mytodo-6fe56.firebaseio.com",
  storageBucket: "mytodo-6fe56.appspot.com",
  messagingSenderId: "79226061602"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          I’m a container lol!
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('TodoApp', () => TodoApp);
