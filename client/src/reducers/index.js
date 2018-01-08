import { combineReducers } from 'redux'
import memeReducer from './memeReducer'
import userReducer from './userReducer'

const rootReducers = combineReducers({
	memeReducer,
	userReducer
})

export default rootReducers