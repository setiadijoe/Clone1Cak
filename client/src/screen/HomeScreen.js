import React, { Component } from 'react';
import { View,FlatList,ActivityIndicator } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Icon} from 'native-base';
import MemesComponent from '../component/MemesComponent'
import { connect } from 'react-redux'
import { fetchApiMemes } from '../actions/memeAction'
import { likeMeme } from '../actions/memeAction'


class HomeScreen extends Component {
    constructor(props){
      super()
      this.state = {
        memes: []
      }
    }  
  static navigationOptions= (({navigation}) => ({
    title: 'Home',
    headerRight: <Icon name="add" size={35} style={{marginRight: 20}}
    onPress={ () => navigation.navigate('Upload')}
    />,
    headerStyle: {
      backgroundColor: 'transparent',
      zIndex: 100,
      top: 0,
      left: 0,
      right: 0
    }     
  }))   

  componentDidMount() {
    this.props.fetchApiMemes()
    this.setState({
      memes: this.props.memes
    }) 
  }     
  render() {
    const { navigate, state } = this.props.navigation
    return (
      <View>
      {this.state.memes.length === 0 && <ActivityIndicator
       color = '#bc2b78'
       size = "large"
       /> }
       <FlatList
       data={this.state.memes}
       keyExtractor= {(item,index) => index}
       renderItem= {({item}) => {
        return(
          <MemesComponent meme={item} navigate={navigate} like={this.props.likeMeme}/>
          )           
      }}
      />
      </View>    
      )
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memeReducer.memes,
    user: state.userReducer.user
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchApiMemes: () => dispatch(fetchApiMemes()),
    likeMeme: (memeId,userId) => dispatch(likeMeme(memeId,userId))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)