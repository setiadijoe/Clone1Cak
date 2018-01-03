import React from 'react';
import { StyleSheet,
	View, 
	Text, 
	TouchableOpacity,
	TextInput,
	Image } from 'react-native';
	import { Container, Header, Content, Form, Item, Input, Button } from 'native-base';
	import { StackNavigator } from 'react-navigation';
	import { connect } from 'react-redux'
	import { fetchApiUsers } from '../actions/userAction'


	class LoginScreen extends  React.Component {
		constructor(props){
			super()
			this.state = {
				username: '',
				password: '',
				isLogin: false,
			}
		}

		checkLogin() {
			alert(this.state.username)
			this.props.fetchApiUsers(this.state.username,this.state.password)
			this.setState({
				isLogin: true
			})			
		}

		componentDidMount() {
			if(this.state.isLogin){
				navigate('Home')
			} 
		}

		render() {
			const { navigate,state } = this.props.navigation
			if(this.state.isLogin){
				navigate('Home')
			}
				return (
					<Container>
						<Content>
							<Form>
								<Item>
									<Input 
									onChangeText={(user) => this.setState({username : user})}
									placeholder='username'
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
							<Button full success style={styles.loginButton} onPress={() => this.checkLogin()}><Text> Sign In </Text></Button>
							<Button full danger onPress={() => navigate('SignUp')}><Text> Sign Up </Text></Button>
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


	function mapDispatchToProps (dispatch) {
		return {
			fetchApiUsers: (name,pass) => dispatch(fetchApiUsers(name,pass))
		}
	}

	export default connect(null, mapDispatchToProps)(LoginScreen)