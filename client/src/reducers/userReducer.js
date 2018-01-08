const initialState = {
	user: [{
		name: 'Ahmad',
		username: 'mengot',
		age: 20,
		password: 'mengot',
		email: 'mengot@gmail.com',
		_id: '123231',
		},
		{
			name: 'a',
			username: 'a',
			age: 20,
			password: 'a',
			email: 'a@gmail.com',
			_id: 'a',			
		}
	],
	isLogin: false,
}
function userReducer(state=initialState, action){
	switch(action.type) {
		case 'GET_USER':
			userLogin = state.user.filter( userIsLogin => userIsLogin._id == action.payload.userId)
			return {...state, isLogin : action.payload.isLogin, user: userLogin}
		case 'ADD_USER':
			return {...state, user: action.payload}
		default:
			return state
	}
}

export default userReducer