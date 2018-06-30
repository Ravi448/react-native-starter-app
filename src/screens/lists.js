import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content, List, ListItem, Thumbnail} from 'native-base';

const data = [
    {
        icon:require('../../assets/lid.png'),
        name:'Ravi K',
        job:'JS & PHP Programmer'
    },
    {
        icon:require('../../assets/sid.png'),
        name:'Sid S',
        job:'Python & Ruby Developer'
    },
    {
        icon:require('../../assets/abhij.png'),
        name:'Abhi Jais',
        job:'Java & PHP Developer'
    },
    {
        icon:require('../../assets/lid.png'),
        name:'Abhi Oj',
        job:'Java Developer'
    },
    {
        icon:require('../../assets/pk.png'),
        name:'John Doe',
        job:'I don\'t know who is he!'
    }
];

export default class Lists extends Component{
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
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" size={26} color="#0000b3" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Lists</Text>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <List 
                        dataArray={data}
                        renderRow={(data)=>
                            <ListItem>
                                <Thumbnail  
                                    square
                                    size={75}
                                    source={data.icon}
                                />
                                <Body>
                                    <Text>{data.name}</Text>
                                    <Text note>{data.job}</Text>
                                </Body>
                            </ListItem>
                        }
                    />
                </ScrollView>
            </Container>
        )
    }
}