import {createActions} from 'redux-actions';

export const {
    toRegister,
    toLogin
} = createActions(
    'TO_REGISTER',
    'TO_LOGIN'
);

export const {
    regist:
        {
            request: registRequest,
            success: registSuccess,
            failure: registFailure,
        }
    } = createActions( {
        REGIST: {
            REQUEST: (email, pass) => ({email: email, pass: pass}),
            SUCCESS: response => (response),
            FAILURE: error => ({error: error})
        }
    },
    {namespace: '_'}
);
