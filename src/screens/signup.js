import React, { Component } from 'react';
import {ScrollView,StyleSheet,AsyncStorage} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Body, Right, Button, Form, Item, Label, Content, Input, ListItem, Radio, DatePicker } from 'native-base';
export default class Signup extends Component{

    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            phone:'',
            password:'',
            cPass:'',
            dob:''
        }
    }

    formSubmit(){
        if(!this.validateEmail()){alert('Input email is not valid!');return false}
        if(this.state.password.length == 0){alert('Please enter valid password!');return false}
        if(this.state.password != this.state.cPass){alert('Password did not match!');return false}
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
                        <Text>Signup</Text>
                    </Body>
                    <Right/>
                </Header>
                <ScrollView>
                    <Content>
                        <Form>
                            <Item floatingLabel style={styles.itemStyle}>
                                <Label>Your Name</Label>    
                                <Input
                                    style={styles.inputStyle}
                                    onChangeText={(t)=>this.setState({name:t})}
                                />
                            </Item>
                            <Item floatingLabel style={styles.itemStyle}>
                                <Label>Your Email</Label>    
                                <Input
                                    style={styles.inputStyle}
                                    keyboardType="email-address"
                                    onChangeText={(t)=>this.setState({email:t})}
                                />
                            </Item>
                            <Item floatingLabel style={styles.itemStyle}>
                                <Label>Your Phone</Label>    
                                <Input
                                    style={styles.inputStyle}
                                    keyboardType="phone-pad"
                                    maxLength={10}
                                    onChangeText={(t)=>this.setState({phone:t})}
                                />
                            </Item>
                            <Item floatingLabel style={styles.itemStyle}>
                                <Label>Create Password</Label>    
                                <Input
                                    style={styles.inputStyle}
                                    secureTextEntry={true}
                                    maxLength={25}
                                    onChangeText={(t)=>this.setState({password:t})}
                                />
                            </Item>
                            <Item floatingLabel style={styles.itemStyle}>
                                <Label>Confirm Password</Label>    
                                <Input
                                    style={styles.inputStyle}
                                    secureTextEntry={true}
                                    maxLength={25}
                                    onChangeText={(t)=>this.setState({cPass:t})}
                                />
                            </Item>
                            <Label style={{marginLeft:20}}>Date of birth:</Label>
                            <DatePicker
                                defaultDate={new Date(2018, 4, 4)}
                                minimumDate={new Date(2018, 1, 1)}
                                maximumDate={new Date(2018, 12, 31)}
                                locale={"en"}
                                timeZoneOffsetInMinutes={undefined}
                                modalTransparent={false}
                                animationType={"fade"}
                                androidMode={"default"}
                                placeHolderText=" "
                                placeHolderTextStyle={{ color: "#d3d3d3" }}
                                style={{marginLeft:20,paddingLeft: 20}}
                                onDateChange={(t)=>this.setState({dob:t})}
                            />
                            <Item style={styles.itemBtnGrp}>
                                <Button 
                                    full
                                    rounded={true}
                                    style={styles.btnLogin}
                                    onPress={()=>this.formSubmit()}
                                >
                                    <Text style={{fontSize:18}}>Signup</Text>
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