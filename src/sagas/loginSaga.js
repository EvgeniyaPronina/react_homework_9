import {call, put, takeLatest, fork, all} from 'redux-saga/effects';
import {loginRequest, loginSuccess, loginFailure} from '../actions/loginActions';
import {registRequest, registSuccess, registFailure} from '../actions/registActions';
import {login, registration, setTokenApi, clearTokenApi} from '../helpers/api';


function* loginFlow() {
    while (true) {
        const {email, pass} = yield take('LOGIN_REQUEST');

        const task = yield fork(authorize, email, pass);
        const action = yield take(['LOGOUT', 'LOGIN_ERROR']);

        if (action.type === 'LOGOUT') yield cancel(task);

        yield call(clearTokenApi, 'token');
    }
}

function* authorize(email, pass) {
    try {
        const token = yield call(login, email, pass);
        yield put(loginSuccess(token));
        yield call(setTokenApi, {token});
        return token;
    } catch (error) {
        yield put(loginFailure(error));
    }
}

// function* fetchLogin(action) {
//
//     try {
//         const {email, pass} = action.payload
//         const loginResult = yield call(login, action.payload);
//         console.log(loginResult)
//         yield put(loginSuccess(loginResult));
//     } catch (error) {
//         console.log(error)
//         yield put(loginFailure(error));
//     }
// }

function* loginRequestWatch() {
    yield takeLatest(loginRequest, fetchLogin);
}

function* fetchRegist(action) {

    try {
        const {email, pass} = action.payload
        const registResult = yield call(registration, action.payload);
        console.log(registResult)
        yield put(registSuccess(registResult));
    } catch (error) {
        console.log(error)
        yield put(registFailure(error));
    }
}

function* registRequestWatch() {
    yield takeLatest(registRequest, fetchRegist);
}


export default function* loginSaga () {
    yield all([
        fork(loginRequestWatch),
        fork(registRequestWatch),
    ])
}
