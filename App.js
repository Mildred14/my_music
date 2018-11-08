import React, {Component} from 'react';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import {Actions, Scene, Router} from 'react-native-router-flux';
 import {Platform, StyleSheet, Text, View, Button, Switch, TextInput, Alert} from 'react-native';

 const scenes=Actions.create(
   <Scene key="root">
      <Scene key= "login" component={LoginView} hideNavBar/>
      <Scene key= "home" component={HomeView} hideNavBar/>
   </Scene>
 )
 const instructions = Platform.select({
   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
   android:
     'Double tap R on your keyboard to reload,\n' +
     'Shake or press menu button for dev menu',
 });

 type Props = {};
 export default class App extends Component<Props> {
   render() {
     return <Router scenes={scenes}/> 
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

