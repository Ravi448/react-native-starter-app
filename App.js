import React, { Component } from 'react';
import {createDrawerNavigator,createStackNavigator} from 'react-navigation';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
// Pages
import Main from './src/screens/main';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import ForgotPassword from './src/screens/forgotPassword';


export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const Drawer = createDrawerNavigator({
    Main:{screen:Main,}
},{
  initialRouteName:'Main',
  contentOptions:{
    activeTintColor:'#ff9102'
  }
});

const AppNavigator = createStackNavigator({
  Drawer:{screen:Drawer},

  Login:{screen:Login},
  Signup:{screen:Signup},
  ForgotPassword:{screen:ForgotPassword}
},{
  initialRouteKey:'Drawer',
  headerMode:'none'
});