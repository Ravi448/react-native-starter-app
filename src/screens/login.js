import React, { Component } from 'react';
import {ScrollView,StyleSheet,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content, View, Form, Input, Item, Label } from 'native-base';
export default class Login extends Component{
    constructor(props){
        super(props)
        this.state = {email:'',password:''}
    }

    formSubmit(){
        if(!this.validateEmail()){alert('Input email is not valid!');return false}
        if(this.state.password.length == 0){alert('Please enter valid password!');return false}
        AsyncStorage.setItem('@user:creds',JSON.stringify(this.state),()=>{
            this.props.navigation.replace('Drawer');
        });
    }

    validateEmail(){
        let email = this.state.email;
        if(email.length==0)
            return false;
        if(email.indexOf('@') == -1)
            return false;
        if(email.indexOf('.',email.indexOf('@')) == -1)
            return false;
        return true;
    }

    render(){
        return(
            <Container>
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
                        <Text>Login</Text>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <Content>
                        <View>
                            <Form>
                                <Item floatingLabel style={styles.itemStyle} >
                                    <Label>Your Login Email</Label>
                                    <Input 
                                        keyboardType="email-address"
                                        style={styles.inputStyle}
                                        onChangeText={(txt)=>this.setState({email:txt})}
                                        value={this.state.email}
                                    />
                                </Item>
                                <Item floatingLabel style={styles.itemStyle}>
                                    <Label>Your Secret Password</Label>
                                    <Input
                                        secureTextEntry={true}
                                        maxLength={25}
                                        keyboardType="email-address"
                                        style={styles.inputStyle}
                                        onChangeText={(t)=>this.setState({password:t})}
                                        value={this.state.password}
                                    />
                                </Item>
                                <Item style={styles.itemBtnGrp}>
                                    <Button 
                                        full
                                        rounded={true}
                                        style={styles.btnLogin}
                                        onPress={()=>this.formSubmit()}
                                    >
                                        <Text style={{fontSize:18}}>Login</Text>
                                    </Button>
                                </Item>
                            </Form>
                            <Item style={styles.itemBtnGrp}>
                                <Button 
                                    transparent
                                    full
                                    style={styles.btnEtc}
                                    onPress={()=>this.props.navigation.navigate('ForgotPassword')}
                                >
                                    <Text style={{fontSize:18}}>Forgot Password ?</Text>
                                </Button>
                            </Item>
                            <Item style={styles.itemBtnGrp}>
                                <Button 
                                    transparent
                                    full
                                    style={styles.btnEtc}
                                    onPress={()=>this.props.navigation.navigate('Signup')}
                                >
                                    <Text style={{fontSize:18}}>Create a free account <Icon name="trending-flat" /> </Text>
                                    
                                </Button>
                            </Item>
                        </View>
                    </Content>
                </ScrollView>
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