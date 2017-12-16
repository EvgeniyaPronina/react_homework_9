import {createActions} from 'redux-actions';

export const {
    login: {
        request: loginRequest,
        success: loginSuccess,
        failure: loginFailure,
    }
} = createActions(
    {
        LOGIN: {
            REQUEST: (email, pass) => ({email: email, pass: pass}),
            SUCCESS: response => (response),
            FAILURE: error => ({error: error})
        }
    },
    {namespace: '_'}
);

export const {
    toLogout
} = createActions(
    'TO_LOGOUT'
);

// export const loginRequest = actionCreators.login.request;
// export const loginSuccess = actionCreators.login.success;
// export const loginFailure = actionCreators.login.failure;