import React from 'react';
import { StyleSheet,
		View, 
		Text, 
		Button,
		TouchableOpacity,
		TextInput,
		Image } from 'react-native';

export default class HomeScreen extends  React.Component {
	constructor(props){
		super()
		this.state = {
			username: '',
			password: '',
		}
	}

	checkLogin() {
		alert(this.state.username)
	}

	render() {
		return (
	       <View style={styles.container}>
	       	<TextInput
	       		style={
	       			{
	       				height: 40,
	       				width: 150,
	       				borderColor: 'black',
	       				borderWidth: 1
	       			}
	       		}
	       		onChangeText={(user) => this.setState({username : user})}
	       		placeholder='username'
	       	/>
	       	<TextInput
	       		secureTextEntry={true}
	       		style={
	       			{
	       				height: 40,
	       				width: 150,
	       				borderColor: 'black',
	       				borderWidth: 1,
	       				marginTop: 20,
	       			}
	       		}
	       		onChangeText={(pass) => this.setState({password : pass})}
	       		placeholder='password'
	       	/>	       
     		<TouchableOpacity onPress={() => this.checkLogin()}> 
       		 <Text style={styles.loginButton}> Login </Text>
         	</TouchableOpacity>		       		
	      </View>			
		)
	}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  h1: {
  	fontSize: 40,
  	marginBottom: 100,
  	color: 'green',
  },
  loginButton: {
  	fontSize: 20,
  	marginTop: 10,
  	borderWidth: 1,

  }
});
