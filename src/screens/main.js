import React, { Component } from 'react';
import {StyleSheet,ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content } from 'native-base';

export default class Main extends Component{
    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#e6ecff'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" size={26} color="#0000b3" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>My Store</Text>
                    </Body>
                    <Right>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.navigate('Login')}
                        >
                            <Icon name="account-circle" size={26} color="#0000b3" />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <Content>
                    
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    icons:{
        color:'#ff9102'
    }
})