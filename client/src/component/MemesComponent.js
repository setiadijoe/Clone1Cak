import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux'


class MemesComponent extends Component {
  constructor(props) {
    super()
    this.state = {
      update: true
    }
  }
  likeMemeComponent(memeId,userId) {
    this.props.like(memeId,userId)
    this.setState({
      update: true
    })
  }
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
                <Button transparent onPress={() => this.likeMemeComponent(this.props.meme._id, this.props.user._id)}>
                  <Icon active name="thumbs-up" />
                  <Text>{this.props.meme.funny.length} Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent 
                  onPress={() => this.props.navigate('Meme', {
                  meme: this.props.meme
                  })
                }>
                  <Icon active name="chatbubbles" />
                  <Text>{this.props.meme.comment.length} Comments</Text>
                </Button>
              </Body>
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


export default connect(mapStateToProps)(MemesComponent)