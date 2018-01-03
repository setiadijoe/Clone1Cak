import React from 'react';
import { StyleSheet,
		View, 
		Text, 
		TouchableOpacity,
		TextInput,
		Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
import { StackNavigator } from 'react-navigation';


export default class SingUpScreen extends  React.Component {
	constructor(props){
		super()
		this.state = {
			name: '',
			age: '',
			email: '',
			username: '',
			password: ''
		}
	}

	signUp() {
		alert(this.state.email,this.state.age,this.state.email,this.state.username,this.state.password)
	}

	render() {		
		return (
			<Container>
				<Content>
					<Form>
						<Item>
							<Input 
							onChangeText={(nameUser) => this.setState({name : nameUser})}
							placeholder='name'
							/>							
						</Item>
						<Item>
							<Input 
							onChangeText={(user) => this.setState({username : user})}
							placeholder='username'
							/>							
						</Item>
						<Item>
							<Input 
							onChangeText={(ageUser) => this.setState({age : ageUser})}
							placeholder='age'
							/>							
						</Item>
						<Item>
							<Input 
							onChangeText={(emailUser) => this.setState({email : emailUser})}
							placeholder='email'
							/>							
						</Item>																		
						<Item last>
							<Input 
							secureTextEntry={true}
							onChangeText={(pass) => this.setState({password : pass})}
							placeholder='password'
							/>							
						</Item>						
					</Form>
					<Button full success style={styles.loginButton} onPress={() => this.signUp()}><Text> SignUp </Text></Button>
				</Content>				
			</Container>		       				
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
  	marginTop: 20,
  }
});
