// develop index for instructions
// import a library to create component
import React from 'react';
import { View, AppRegistry } from 'react-native';
import Header from './src/compenent/header';
import AlbumList from './src/compenent/albumList';

// to do ReactNative as well we can android
// import ReactNative,{ Text, AppRegistry } from 'react-native';

//create component
const App = () => (
  <View style={{flex:1}}>
   <Header mHeaderText={'ALBUMS!'} />
   <AlbumList />
   </View>
 );
AppRegistry.registerComponent('albums', () => App);
//render componen to device
