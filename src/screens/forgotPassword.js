import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content, Form, Item, Label, Input } from 'native-base';
export default class ForgotPassword extends Component{
    render(){
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
                        <Text>Forgot Password</Text>
                    </Body>
                    <Right/>
                </Header>
                <Content>
                    <Form>
                        <Item floatingLabel style={styles.itemStyle}>
                            <Label>Enter your registered email</Label>
                            <Input 
                                keyboardType="email-address"
                                style={styles.inputStyle}
                            />
                        </Item>
                        <Item style={styles.itemBtnGrp}>
                            <Button 
                                full
                                rounded={true}
                                style={styles.btnLogin}
                            >
                                <Text style={{fontSize:18}}>Send Email</Text>
                            </Button>
                        </Item>
                    </Form>
                    <Item style={styles.itemBtnGrp}>
                        <Button 
                            transparent
                            full
                            style={styles.btnEtc}
                            onPress={()=>this.props.navigation.goBack()}
                        >
                            <Text style={{fontSize:18}}><Icon name="arrow-back" /> Back to Login </Text>
                            
                        </Button>
                    </Item>
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
    btnEtc:{
        flex:1
    }
})