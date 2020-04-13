import {combineReducers} from 'redux'
import homeReducer from './homeReducer'
import regionalReducer from './regionalReducer'

export default combineReducers({
	home: homeReducer,
	regional: regionalReducer
}) 