import {combineReducers} from 'redux';
import loginReducer from './loginReducer'
import currencyReducer from './currencyReducer'

export default combineReducers({
    loginReducer,
    currencyReducer
});