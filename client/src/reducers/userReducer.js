const initialState = {
	user: {
		name: 'Ahmad',
		username: 'mengot',
		age: 20,
		password: 'mengot',
		email: 'mengot@gmail.com',
		_id: '123231',
	},
	isLogin: false,
}
function userReducer(state=initialState, action){
	switch(action.type) {
		case 'GET_USER':
			return {...state, isLogin : action.payload.isLogin}
		case 'ADD_USER':
			state.user.push(action.payload)
			return state 		
		default:
			return state
	}
}

export default userReducer