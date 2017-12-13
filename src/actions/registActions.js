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

// export const registRequest = actionCreators.regist.request;
// export const registSuccess = actionCreators.regist.success;
// export const registFailure = actionCreators.regist.failure;