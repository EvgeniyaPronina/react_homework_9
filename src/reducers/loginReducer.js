import {loginRequest, loginSuccess, loginFailure} from '../actions/loginActions';
import {toRegister, toLogin} from '../actions/registActions';
import {handleActions} from 'redux-actions';

const initialState = {
    isAuthorized: false,
    error: ''
}


const login = handleActions(
    {
        [loginSuccess]: (state, action) => ({
            ...state,
            isAuthorized: true
        }),
        [loginFailure]: (state, action) => ({
            ...state,
            error: 'неверное имя пользователя и/или пароль'
        }),
        [toRegister]: () => ({isAuthorized: false, error: ''}),
        [toLogin]: (state) => ({...state, error: ''})
    },
    initialState
);

export default login

// export const getShowId = state => state.showId;