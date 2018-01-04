import React, { Component } from 'react';
import { StyleSheet,
    View, 
    TouchableOpacity,
    Image,
    FlatList } from 'react-native';
import { Form, Item, Input, Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';    
import CommentComponent from '../component/CommentComponent'
import { connect } from 'react-redux'
import { likeMeme } from '../actions/memeAction'
import { addComment } from '../actions/memeAction'
import { fetchApiMemes } from '../actions/memeAction'

class MemeScreen extends Component {
  constructor(props) {
    super()
    this.state= {
      comment: '',
      updated: false,
      memeComment: ''
    }
  }

  componentDidMount() {
    const { navigate,state } = this.props.navigation
    this.props.fetchApiMemes() 
    this.setState({
      memeComment: state.params.meme.comment
    })
  }

  componentDidUpdate(prevProps) {
    // alert(JSON.stringify(prevProps.navigation.state.params.meme.comment))
    // alert(JSON.stringify(this.state.memeComment))
    // this.setState({
    //   update: true,
    // })
  }

  likeMemeScreen(memeId,userId) {
    this.props.likeMeme(memeId,userId)
    this.setState({
      updated: true
    })
  }

  addCommentMeme(memeId,nameUser,commentUser) {
    this.props.addComment(memeId,nameUser,commentUser)
    this.setState({
      updated: true
    })
  }  

  render() {
    const { navigate,state } = this.props.navigation
    return (
    <Container>
          <Content>
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: state.params.meme.avatarUrl}} />
                  <Body>
                    <Text>{state.params.meme.title}</Text>
                    <Text note>{state.params.meme.author}</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: state.params.meme.imageUrl}} style={{height: 400, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent onPress={() => this.likeMemeScreen(state.params.meme._id, this.props.user._id)}>
                    <Icon active name="thumbs-up" />
                    <Text>{state.params.meme.funny.length} Likes</Text>
                  </Button>
                </Left>
              </CardItem>
              <FlatList
              data={this.state.memeComment}
              keyExtractor= {(item,index) => index}
              renderItem= {({item}) => {
                return(
                   <CommentComponent comment={item} navigate={navigate}/>   
                  )           
              }}
              />                 
            </Card>
              <Form>
                <Item>
                  <Input 
                  onChangeText={(com) => this.setState({comment : com})}
                  placeholder='comment here'
                />              
                </Item>         
              </Form> 
              <Button block dark 
              onPress={() => this.addCommentMeme(state.params.meme._id, this.props.user.name, this.state.comment)}
              >
                <Text> Add Comment </Text>
              </Button>                 
          </Content>
        </Container>
    )
  }
} 

function mapStateToProps(state) {
  return {
    user: state.userReducer.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    likeMeme: (memeId,userId) => dispatch(likeMeme(memeId,userId)),
    addComment: (memeId,userName,com) => dispatch(addComment(memeId,userName,com)),
    fetchApiMemes: () => dispatch(fetchApiMemes())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MemeScreen)