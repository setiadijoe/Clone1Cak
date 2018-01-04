import axios from 'axios'

export const getUser= () => {
	return {
		type: "GET_USER",
		payload: {
			isLogin: true
		}
	}
}

export const failedLogin= () => {
	return {
		type: "GET_USER",
		payload: {
			isLogin: false
		}
	}
}

export const fetchApiUsers= (name,pass) => {
	return (dispatch,getState) => {
		if(name === 'a' && pass === 'a'){
			alert('login success')
			dispatch(getUser())
		}else{
			alert('login false')
			dispatch(failedLogin())
		}
	}
}