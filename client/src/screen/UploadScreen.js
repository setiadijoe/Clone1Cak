import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text, Header, Content, Form, Button, Item, Input, Label } from 'native-base';
import { connect } from 'react-redux'
import { uploadMeme } from '../actions/memeAction'

class UploadScreen extends Component {
  constructor(props) {
    super()
    this.state = {
      title: '',
      imageUrl: '',
    }
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
            <Item floatingLabel last>
              <Label>Image</Label>
              <Input onChangeText={(image) => this.setState({imageUrl : image})}/>
            </Item>
            <Button full success style={styles.loginButton} onPress={() => this.props.uploadMeme(this.state.title,this.state.imageUrl)}><Text> Upload </Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  loginButton: {
    marginTop: 20,
  }
});

function mapDispatchToProps (dispatch) {
  return {
    uploadMeme: (title,imageUrl) => dispatch(uploadMeme(title,imageUrl))
  }
}

export default connect (null, mapDispatchToProps)(UploadScreen)