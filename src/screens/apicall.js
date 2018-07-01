import React, { Component } from 'react';
import {ScrollView,ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content, List, ListItem, Thumbnail, Card,CardItem, Grid, Row} from 'native-base';

export default class Apicall extends Component{
    constructor(props) {
        super(props);
        this.state = { loading: true };
    }

    componentDidMount(){
        return fetch('https://jsonplaceholder.typicode.com/users',{
                    method: 'GET',
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    }
                })
                .then((response)=>response.json())
                .then((rsp)=>{
                    this.setState({
                        loading:false,
                        data:rsp
                    });
                }).catch((c=>console.log(c)));
    }

    render(){
        if(this.state.loading){
            return(
                <ActivityIndicator
                    style={{display:'flex',flexDirection:'row',flex:1,justifyContent:'center'}}
                    size="large"
                />
            )
        }
        return(
            <Container style={{backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#e6ecff'}} androidStatusBarColor="#e3e9fc">
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" size={26} color="#0000b3" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Web API Req.</Text>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <List
                        dataArray={this.state.data}
                        renderRow={d=>
                            <Card>
                                <CardItem>
                                    <Grid>
                                        <Row>
                                            <Text>{d.name}</Text>
                                        </Row>
                                        <Row>
                                            <Text>{d.email}</Text>
                                        </Row>
                                        <Row>
                                            <Text>{d.phone}</Text>
                                        </Row>
                                        <Row>
                                            <Text>{d.website}</Text>
                                        </Row>
                                    </Grid>
                                </CardItem>
                            </Card>
                        }
                    />
                </ScrollView>
            </Container>
        )
    }
}