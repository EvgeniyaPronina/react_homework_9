import {call, put, takeLatest, fork, all} from 'redux-saga/effects';
import {loginRequest, loginSuccess, loginFailure} from '../actions/loginActions';
import {login} from '../helpers/api';

function* fetchLogin(action) {

    try {
        const {email, pass} = action.payload
        const loginResult = yield call(login, action.payload);
        console.log(loginResult)
        yield put(loginSuccess(loginResult));
    } catch (error) {
        console.log(error)
        yield put(loginFailure(error));
    }
}

function* loginRequestWatch() {
    yield takeLatest(loginRequest, fetchLogin);
}


export default function* loginSaga () {
    yield all([
        fork(loginRequestWatch),
    ])
}
