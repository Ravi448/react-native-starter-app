import React, { Component } from 'react';
import {StyleSheet,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content, Form, Item, Label, Input, View, Grid, Row, Col } from 'native-base';
export default class Profile extends Component{
    constructor(props){
        super(props)
        this.state = {
            data:{},
            loading:true
        }
    }

    componentDidMount(){
        AsyncStorage.getItem('@user:creds',(e,s)=>{
            if(s)
                this.setState({data:JSON.parse(s),loading:false})
        });
    }

    logout(){
        AsyncStorage.clear(()=>{
            this.props.navigation.replace('Drawer');
        });
    }
    render(){
        if(this.state.loading){
            return 'Please wait';
        }
        return(
            <Container>
                <Header style={{backgroundColor:'#e6ecff'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Icon name="arrow-back" size={26} />
                        </Button>
                    </Left>
                    <Body>
                        <Text>My Profile</Text>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <View>
                        <Grid style={{marginVertical:20,marginHorizontal:20}}>
                            <Row style={styles.row}>
                                <Col><Text style={styles.col1}>Name: </Text></Col>
                                <Col><Text style={styles.col2}>{this.state.data.name}</Text></Col>
                            </Row>
                            <Row style={styles.row}>
                                <Col><Text style={styles.col1}>Email: </Text></Col>
                                <Col><Text style={styles.col2}>{this.state.data.email}</Text></Col>
                            </Row>
                            <Row style={styles.row}>
                                <Col><Text style={styles.col1}>Phone: </Text></Col>
                                <Col><Text style={styles.col2}>{this.state.data.phone}</Text></Col>
                            </Row>
                            <Row style={styles.row}>
                                <Col><Text style={styles.col1}>Password: </Text></Col>
                                <Col><Text style={styles.col2}>{this.state.data.password}</Text></Col>
                            </Row>
                            <Row style={styles.row}>
                                <Col><Text style={styles.col1}>DOB: </Text></Col>
                                <Col><Text style={styles.col2}>{this.state.data.dob}</Text></Col>
                            </Row>
                        </Grid>
                    </View>
                    <View>
                        <Button
                            full
                            transparent
                            style={styles.btnLogOut}
                            onPress={()=>this.logout()}
                        >
                            <Icon name="arrow-back" color="#ff5050" size={25} />
                            <Text style={{color:'#ff5050'}} >Logout</Text>
                        </Button>
                    </View>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    btnLogOut:{
        flex:1
    },
    row:{
        paddingHorizontal: 5,
        paddingVertical: 10,
        backgroundColor:'#fff'
    },
    col1:{
        color:'#0000b3',
        fontSize: 17,
    },
    col2:{
        fontSize: 17
    }
})