import React, { Component } from 'react';
import { View,FlatList,ActivityIndicator } from 'react-native';
import { Container, Header, Content, Thumbnail, Text, Icon} from 'native-base';
import MemesComponent from '../component/MemesComponent'
import { connect } from 'react-redux'
import { fetchApiMemes } from '../actions/memeAction'


class HomeScreen extends Component {
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
  }     
  render() {
    const { navigate, state } = this.props.navigation
    return (
      <View>
      {this.props.memes.length === 0 && <ActivityIndicator
       color = '#bc2b78'
       size = "large"
       /> }
       <FlatList
       data={this.props.memes}
       keyExtractor= {(item,index) => item.title}
       renderItem= {({item}) => {
        return(
          <MemesComponent meme={item} key={item.title} navigate={navigate}/>
          )           
      }}
      />
      </View>    
      )
  }
}

function mapStateToProps(state) {
  return {
    memes: state.memeReducer.memes
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchApiMemes: () => dispatch(fetchApiMemes())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)