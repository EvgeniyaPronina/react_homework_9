import {createActions} from 'redux-actions';

const actionCreators = createActions(
    {
        LOGIN: {
            REQUEST: (email, pass) => ({email: email, pass: pass}),
            SUCCESS: response => (response),
            FAILURE: error => ({error: error})
        }
    },
    {namespace: '_'}
);

export const loginRequest = actionCreators.login.request;
export const loginSuccess = actionCreators.login.success;
export const loginFailure = actionCreators.login.failure;