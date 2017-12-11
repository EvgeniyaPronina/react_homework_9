import {combineReducers} from 'redux';
import login from './loginReducer'
import registration from './registReducer'

export default combineReducers({
    login,
    registration
});