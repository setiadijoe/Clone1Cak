/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation'
import LoginScreen from './src/screen/LoginScreen'
import HomeScreen from './src/screen/HomeScreen'
import UploadScreen from './src/screen/UploadScreen'
import SignUpScreen from './src/screen/SignUpScreen'
import MemeScreen from './src/screen/MemeScreen'
import { Provider } from 'react-redux'
import store from './store'

const Navigator = StackNavigator({
  login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'LOGIN',
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0      
      }
    }  
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'SIGN UP',
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0      
      }
    }  
  },
  Meme: {
    screen: MemeScreen,
    navigationOptions: {
      headerTitle: 'MEME',
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0      
      }
    }  
  },    
  Home: {
    screen: HomeScreen,
  },
  Upload: {
    screen: UploadScreen,
    navigationOptions: {
      headerTitle: 'ADD MEME',
      headerStyle: {
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0      
      }
    }  
  },    
},{
  initialRouteName : 'login'
})

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
