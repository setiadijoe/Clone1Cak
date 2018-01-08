import axios from 'axios'

export const getUser= (userId) => {
	return {
		type: "GET_USER",
		payload: {
			userId: userId,
			isLogin: true
		}
	}
}

export const failedLogin= () => {
	return {
		type: "GET_USER",
		payload: {
			userId: null,
			isLogin: false
		}
	}
}

export const signUp= (name,age,email,username,password) => {
	return(dispatch,getState) => {
		let allUser = getState().userReducer.user
		allUser.push({
			name: name,
			age: age,
			email: email,
			username: username,
			password: password,
			_id: Math.random()
		})
		dispatch({
			type: "ADD_USER",
			payload: allUser
		})		
	}
}

export const fetchApiUsers= (name,pass,allUser) => {
	return (dispatch,getState) => {
		allUser.forEach((user,index) => {
			if(name === user.username && pass === user.password ){
				alert('login success')
				dispatch(getUser(user._id))
			}else if(index >= allUser.length -1){
				alert('login false')
				// dispatch(failedLogin())
			}			
		})
	}
}