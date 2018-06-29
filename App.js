import React, { Component } from 'react';
import {createDrawerNavigator,createStackNavigator,DrawerItems} from 'react-navigation';
import { Content, Header, Body, Container,Image } from 'native-base';

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

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={styles.drawerHeader}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/1_XaGxIa_JuHc8YTR5Znv6tg.png')} />
        <Text style={{fontSize:23,color:'#fff'}}>
          Ravi K
        </Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems style={{fontSize:30}} {...props} />
    </Content>

  </Container>

);

const Drawer = createDrawerNavigator({
    Main:{screen:Main,}
},{
  initialRouteName:'Main',
  drawerPosition:'left',
  // contentComponent:CustomDrawerContentComponent,
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

const styles = StyleSheet.create({
  drawerHeader: {
      height: 200,
      backgroundColor: '#900C3F',
  },
  drawerImage: {
      height: 150,
      width: 150,
      borderRadius: 75,
      marginLeft: 50,
  }
});