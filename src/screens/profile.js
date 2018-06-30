import React, { Component } from 'react';
import {StyleSheet,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content, Form, Item, Label, Input } from 'native-base';
export default class Profile extends Component{
    logout(){
        AsyncStorage.clear(()=>{
            this.props.navigation.pop();
        });
    }
    render(){
        return(
            <Container>
                <Header style={{backgroundColor:'#e6ecff'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.pop()}
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
                    <Button
                        full
                        transparent
                        style={styles.btnLogOut}
                        onPress={()=>this.logout()}
                    >
                        <Icon name="arrow-back" color="#ff5050" size={25} />
                        <Text style={{color:'#ff5050'}} >Logout</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    inputStyle:{
        color:'#002233',
        fontSize: 20,
    },
    itemStyle:{
        marginVertical: 10,
        borderBottomColor: '#0000b3',
        marginRight: 20,
    },
    labelStyle:{
        color:'#00111a'
    },
    itemBtnGrp:{
        borderBottomColor:'transparent',
        marginEnd:20,
        marginTop:10
    },
    btnLogin:{
        backgroundColor:'#0000b3',
        flex:1
    },
    btnLogOut:{
        flex:1
    },
    btnEtc:{
        flex:1
    }
})