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
			const { navigate,state } = this.props.navigation
			this.props.fetchApiUsers(this.state.username,this.state.password,this.props.users)
			if(this.state.isLogin){
				navigate('Home')
			}
		}

		componentDidUpdate(prevProps,prevState) {
			const { navigate,state } = this.props.navigation
			if(prevState.isLogin != this.props.isLogin){
				this.setState({
					isLogin: this.props.isLogin
				}, () => {
					if(this.state.isLogin){
						navigate('Home')
					}
				})
			}
		}

		componentWillMount() {
			if(this.state.isLogin){
				navigate('Home')
			} 
		}

		render() {
			const { navigate,state } = this.props.navigation
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

	function mapStateToProps (state) {
		return {
			isLogin: state.userReducer.isLogin,
			users: state.userReducer.user
		}
	}

	function mapDispatchToProps (dispatch) {
		return {
			fetchApiUsers: (name,pass,allUser) => dispatch(fetchApiUsers(name,pass,allUser))
		}
	}

	export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen)