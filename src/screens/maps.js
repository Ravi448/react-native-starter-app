import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content} from 'native-base';
export default class Maps extends Component{
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
                <Header style={{backgroundColor:'#e6ecff'}} androidStatusBarColor="#e3e9fc">
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.pop()}
                        >
                            <Icon name="arrow-back" size={26} color="#0000b3" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Maps</Text>
                    </Body>
                    <Right/>
                </Header>
                
            </Container>
        )
    }
}