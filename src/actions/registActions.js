import {createActions} from 'redux-actions';

export const {
    toRegister,
    toLogin
} = createActions(
    'TO_REGISTER',
    'TO_LOGIN'
);

