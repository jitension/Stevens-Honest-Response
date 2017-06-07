/**
 * Entry point to run the app in android 
 * command: react-native run-android
 */

import React, { Component } from 'react';

//All the routes of the application are available in "/routes/index.js" file
import Routes from './routes';

import {
  AppRegistry,
} from 'react-native';

export default class honestResponse extends Component {
  render() {
    return (
      <Routes />
    );
  }
}


AppRegistry.registerComponent('honestResponse', () => honestResponse);
