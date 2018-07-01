import React, { Component } from 'react';
import {TouchableOpacity,StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, Container, Header, Left, Button, Body, Right, Content,View} from 'native-base';
import { RNCamera, FaceDetector } from 'react-native-camera';

export default class Camera extends Component{
    constructor(props) {
        super(props);
        this.state = { visible: true };
    }
    
    takePicture = async function() {
        if (this.camera) {
          const options = { quality: 0.5, base64: true };
          const data = await this.camera.takePictureAsync(options)
          this.props.navigation.navigate('Picture',{url:data.uri})
        }
    };
    
    render(){
        return(
            <Container style={{backgroundColor:'#fff'}}>
                <Header style={{backgroundColor:'#e6ecff'}}>
                    <Left>
                        <Button
                            transparent
                            onPress={()=>this.props.navigation.pop()}
                        >
                            <Icon name="arrow-back" size={26} color="#0000b3" />
                        </Button>
                    </Left>
                    <Body>
                        <Text>Camera</Text>
                    </Body>
                    <Right/>
                </Header>
                <View style={styles.container}>
                    <RNCamera
                        ref={ref => {
                        this.camera = ref;
                        }}
                        style = {styles.preview}
                        type={RNCamera.Constants.Type.back}
                        flashMode={RNCamera.Constants.FlashMode.on}
                        permissionDialogTitle={'Permission to use camera'}
                        permissionDialogMessage={'We need your permission to use your camera phone'}
                    />
                    <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
                        <TouchableOpacity
                            onPress={this.takePicture.bind(this)}
                            style = {styles.capture}
                        >
                            <Text style={{fontSize: 14}}> SNAP </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    }
  });