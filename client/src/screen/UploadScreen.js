import React, { Component } from 'react';
import { StyleSheet,Image, PixelRatio, View, TouchableOpacity } from 'react-native';
import { Container, Text, Header, Content, Form, Button, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import { uploadMeme } from '../actions/memeAction'
import ImagePicker from 'react-native-image-picker';


class UploadScreen extends Component {

  constructor(props) {
    super()
    this.state = {
      title: '',
      avatarSource: null     
    }
  }  

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source = { uri: response.uri };

      // You can also display the image using data:
      // let source = { uri: 'data:image/jpeg;base64,' + response.data };

      this.setState({
        avatarSource: source
      });
    }
   });
  } 



  render() {
    const { navigate,state } = this.props.navigation
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Title</Label>
              <Input onChangeText={(newTitle) => this.setState({title : newTitle})} />
            </Item>
            <TouchableOpacity onPress={() => this.selectPhotoTapped()}>
                <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                  { this.state.avatarSource === null ? <Text>Select an Image</Text> :
                    <Image style={styles.avatar} source={this.state.avatarSource} />
                  }
                </View>
            </TouchableOpacity>            
            <Button full success style={styles.upladButton} onPress={() => this.props.uploadMeme(this.state.title,this.state.avatarSource.uri,this.props.user.name)}><Text> Upload </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  upladButton: {
    marginTop: 5,
  },
  avatarContainer: {
    marginTop: 20,
    marginLeft: 20,
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    borderRadius: 75,
    width: 150,
    height: 150
  }
});

function mapStateToProps (state) {
  return {
    user: state.userReducer.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    uploadMeme: (title,imageUrl,nameUser) => dispatch(uploadMeme(title,imageUrl,nameUser))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadScreen)