import React, { Component } from 'react';
import {WebView,ScrollView, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content} from 'native-base';
export default class Webview extends Component{
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }
    
    hideSpinner() {
        this.setState({ visible: false });
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
                            <Icon name="arrow-back" size={26} color="#0000b3" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>WebView</Text>
                    </Body>
                    <Right/>
                </Header>
                {this.state.visible && (
                    <ActivityIndicator
                      style={{display:'flex',flexDirection:'row',flex:1,justifyContent:'center'}}
                      size="large"
                      animating={true}
                    />
                )}
                <WebView 
                    onLoad={() => this.hideSpinner()}
                    source={{uri:'https:www.github.com/ravi448'}}
                />
            </Container>
        )
    }
}