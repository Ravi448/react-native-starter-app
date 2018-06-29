import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right } from 'native-base';

export default class Main extends Component{
    render(){
        return(
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.openDrawer()}
                        >
                            <Icon name="menu" size={25} />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Main</Text>
                    </Body>
                    <Right>
                        <Icon name="account-circle" size={25} />
                    </Right>
                </Header>
            </Container>
        )
    }
}