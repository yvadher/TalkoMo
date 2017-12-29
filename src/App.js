/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {
  Router,
  Scene,
} from 'react-native-router-flux';

import Welcome from './Components/Welcome'
import Login from './Components/Login';
import Chat from './Components/Chat';


export default class App extends Component<{}> {
  render() {
    return (
      <Router>
        <Scene key='root'>
          <Scene hideNavBar='false' key="Welcome" component={Welcome}/>
          <Scene key="Login" component={Login} title='Login'/>
          <Scene key="Chat" component={Chat} title='Chat'/>
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
