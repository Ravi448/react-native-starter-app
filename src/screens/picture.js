import React, { Component } from 'react';
import {StyleSheet,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content,View} from 'native-base';

export default class Picture extends Component{
    constructor(props) {
        super(props);
        this.state = { path: this.props.navigation.state.params.url };
    }
    
    

    render(){
        return(
            <Container style={{backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#e6ecff'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.pop()}
                        >
                            <Icon name="close" size={26} color="#0000b3" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Camera</Text>
                    </Body>
                    <Right/>
                </Header>
                <View style={{flex:1}}>
                    <Image
                        source={{uri:this.state.path}}
                        style={{flex:1}}
                    />
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  });