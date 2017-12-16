import {createAction, createActions} from 'redux-actions';

export const {
    login: {
        request: loginRequest,
        success: loginSuccess,
        failure: loginFailure,
    },
    logout
} = createActions(
    {
        LOGIN: {
            REQUEST: (email, pass) => ({email: email, pass: pass}),
            SUCCESS: response => (response),
            FAILURE: error => ({error: error})
        },
        LOGOUT: undefined
    },
    {namespace: '_'}
);


// export const {
//     logout
// } = createAction(
//     'LOGOUT'
// );

// export const loginRequest = actionCreators.login.request;
// export const loginSuccess = actionCreators.login.success;
// export const loginFailure = actionCreators.login.failure;