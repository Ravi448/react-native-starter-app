import React, { Component } from 'react';
import {createDrawerNavigator,createStackNavigator,DrawerItems} from 'react-navigation';
import { Content, Header, Body, Container } from 'native-base';

import {
  Platform,
  StyleSheet,
  Text,Image,
  View,YellowBox
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Pages
import Main from './src/screens/main';
import Login from './src/screens/login';
import Signup from './src/screens/signup';
import ForgotPassword from './src/screens/forgotPassword';
import Profile from './src/screens/profile';
import WebView from './src/screens/webview';
import Lists from './src/screens/lists';
import Apicall from './src/screens/apicall';
import Maps from './src/screens/maps';
import Camera from './src/screens/camera';

YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
YellowBox.ignoreWarnings(['Warning: Module RCTImageLoader requires'])

export default class App extends Component {
  render() {
    return (
      <AppNavigator/>
    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Content>
      <View style={styles.drawerHeader}>
        <Image
          style={styles.drawerImage}
          source={require('./assets/logo.png')}
        />
      </View>
      <View style={{backgroundColor:'#fff'}}> 
        <Text style={{fontSize:23,color:'#ff9102'}}>
          Ravi K
          <Icon name="check-circle" size={18} color="#009999" />
        </Text>
      </View>
      <DrawerItems style={{fontSize:30}} {...props} />
    </Content>

  </Container>

);

const Drawer = createDrawerNavigator({
    Main:{screen:Main,navigationOptions:{
      drawerLabel:()=>'Home'
    }},
    Profile:{screen:Profile},
    Webview:{screen:WebView},
    Lists:{screen:Lists},
    Apicall:{screen:Apicall}
},{
  initialRouteName:'Main',
  drawerPosition:'left',
  drawerBackgroundColor:'#e9e8ef',
  contentComponent:CustomDrawerContentComponent,
  contentOptions:{
    activeTintColor:'#ff9102'
  }
});

const AppNavigator = createStackNavigator({
  Drawer:{screen:Drawer},

  Login:{screen:Login},
  Signup:{screen:Signup},
  ForgotPassword:{screen:ForgotPassword},
  Profile:{screen:Profile},
  Webview:{screen:WebView},
  Lists:{screen:Lists},
  Apicall:{screen:Apicall},
  Maps:{screen:Maps},
  Camera:{screen:Camera}
},{
  initialRouteKey:'Drawer',
  headerMode:'none'
});

const styles = StyleSheet.create({
  drawerHeader: {
      flex:1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      backgroundColor:'#fff'
  },
  drawerImage: {
    flex:1,
    marginTop: 30,
  }
});