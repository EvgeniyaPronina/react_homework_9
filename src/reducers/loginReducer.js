import {
    loginRequest,
    loginSuccess,
    loginFailure
} from '../actions/loginActions';
import {
    toRegister,
    toLogin,
    registSuccess,
    registFailure
} from '../actions/registActions';
import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';


const isAuthorized = handleActions(
    {
        [loginSuccess]: () => true,
        [loginFailure]: () => false,
        [toRegister]: () => false,
        [registSuccess]: () => true,
        [registFailure]: () => false
    },
    false
);

const error = handleActions(
    {
        [loginSuccess]: () => '',
        [loginFailure]: (state, action) =>  'неверное имя пользователя и/или пароль',
        [toRegister]: () => '',
        [toLogin]: () => '',
        [registSuccess]: () => '',
        [registFailure]: (state, action) =>  'при регистрации произошла ошибка',
    },
    ''
);

const isRegistered = handleActions(
    {
        [loginSuccess]: () => true,
        [toRegister]: () => false,
        [toLogin]: () => true,
        [registSuccess]: () => true,
        [registFailure]: () => false
    },
    true
);

export default combineReducers({
    isAuthorized,
    isRegistered,
    error
});

export const getIsAuthorized = state => state.loginReducer.isAuthorized;
export const getIsRegistered = state => state.loginReducer.isRegistered;
export const getError = state => state.loginReducer.error;
