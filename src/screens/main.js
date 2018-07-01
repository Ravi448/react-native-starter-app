import React, { Component } from 'react';
import {StyleSheet,ScrollView,AsyncStorage,TouchableHighlight,Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content, View, Grid, Row, Col, Card, CardItem } from 'native-base';
import ImageSlider from 'react-native-image-slider';

const images = [
    require('../../assets/slider1.jpg'),
    require('../../assets/slider2.jpg'),
    require('../../assets/slider3.jpg'),
    require('../../assets/slider4.jpg')
];

export default class Main extends Component{
    constructor(props){
        super(props)
        this.state = {logged:false}
        AsyncStorage.getItem('@user:creds',(e,s)=>{
            if(s)
                this.state.logged = true;
        });
    }

    navigteToAccount(){
        if(this.state.logged)
            this.props.navigation.navigate('Profile');
        else
            this.props.navigation.navigate('Login');
    }

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
                            onPress={()=>this.navigteToAccount()}
                        >
                            <Icon name="account-circle" size={26} color="#0000b3" />
                        </Button>
                    </Right>
                </Header>
                <ScrollView>
                    <Content>
                        <ImageSlider
                            loopBothSides
                            autoPlayWithInterval={5000}
                            images={images}
                            style={{height:200,display: 'flex',marginVertical:1}}
                        />
                        <View>
                            <Text style={{textAlign:'center',paddingVertical:2,fontSize:18}}>My Dashborad</Text>
                        </View>
                        <View>
                            <TouchableHighlight>
                                <Grid style={{marginHorizontal:5}}>
                                    <Row>
                                        <Col onPress={()=>this.props.navigation.openDrawer()}>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem} >
                                                    <View>
                                                        <Image source={require('../../assets/menu.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Drawer</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                        <Col onPress={()=>this.props.navigation.navigate('Login')}>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem}>
                                                    <View>
                                                        <Image source={require('../../assets/form.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Forms</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                        <Col onPress={()=>this.props.navigation.navigate('Maps')}>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem}>
                                                    <View>
                                                        <Image source={require('../../assets/worldwide.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Maps</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem} >
                                                    <View>
                                                        <Image source={require('../../assets/camera.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Camera</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                        <Col onPress={()=>this.props.navigation.navigate('Webview')}>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem}>
                                                    <View>
                                                        <Image source={require('../../assets/internet.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Webview</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                        <Col onPress={()=>this.props.navigation.navigate('Lists')}>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem}>
                                                    <View>
                                                        <Image source={require('../../assets/list.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Lists</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col onPress={()=>this.props.navigation.navigate('Apicall')}>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem} >
                                                    <View>
                                                        <Image source={require('../../assets/api.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Web API</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem}>
                                                    <View>
                                                        <Image source={require('../../assets/form.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Forms</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={styles.card}>
                                                <CardItem style={styles.cardItem}>
                                                    <View>
                                                        <Image source={require('../../assets/worldwide.png')} />
                                                    </View>
                                                    <View>
                                                        <Text style={styles.caption}>Maps</Text>
                                                    </View>
                                                </CardItem>
                                            </Card>
                                        </Col>
                                    </Row>
                                </Grid>
                            </TouchableHighlight>
                        </View>
                    </Content>
                </ScrollView>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    icons:{
        color:'#ff9102'
    },
    card:{
        borderRadius: 10,
        display:'flex',
        flex:1
    },
    cardItem:{
        backgroundColor:'#e6fffa',
        shadowColor: '#e6ffff',
        flexDirection:'column',
        flex:1,
        justifyContent:'center',
        borderRadius:10
    },
    caption:{
        marginVertical:5,
        color:'#00e6b8',
        fontSize:17
    }
})