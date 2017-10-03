// develop index for instructions
// import a library to create component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/compenent/header';

// to do ReactNative as well we can android
// import ReactNative,{ Text, AppRegistry } from 'react-native';

//create component
const App = () => (
   <Header mHeaderText={'ALBUMS!'} />
 );
AppRegistry.registerComponent('albums', () => App);
//render componen to device
