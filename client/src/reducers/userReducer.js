const initialState = {
	user: {
		name: 'Ahmad',
		username: 'mengot',
		age: 20,
		password: 'mengot',
		email: 'mengot@gmail.com',
		_id: '123231'
	}
}
function userReducer(state=initialState, action){
	switch(action.type) {
		case 'GET_USER':
			return state
		case 'ADD_USER':
			state.memes.push(action.payload)
			return state 		
		default:
			return state
	}
}

export default userReducer