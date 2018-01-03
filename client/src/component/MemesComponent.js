import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux'
import { likeMeme } from '../actions/memeAction'

class MemesComponent extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: this.props.meme.avatarUrl}} />
                <Body>
                  <Text>{this.props.meme.title}</Text>
                  <Text note>{this.props.meme.author}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.props.meme.imageUrl}} style={{height: 400, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent onPress={() => this.props.likeMeme(this.props.meme._id, this.props.user._id)}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.meme.funny.length} Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    likeMeme: (memeId,userId) => dispatch(likeMeme(memeId,userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MemesComponent)