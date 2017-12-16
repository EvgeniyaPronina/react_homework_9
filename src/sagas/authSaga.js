import {call, put, take, select, takeLatest, fork, all} from 'redux-saga/effects';
import {loginRequest, loginSuccess, loginFailure, logout} from '../actions/loginActions';
import {registRequest, registSuccess, registFailure} from '../actions/registActions';
import {login, registration, setTokenApi, clearTokenApi} from '../helpers/api';
import {getTokenFromLocalStorage, setTokenToLocalStorage, removeTokenFromLocalStorage} from '../helpers/localStorage';
import { getIsAuthorized } from "../reducers/loginReducer";

export default function* authSaga() {
    while (true) {
        const isAuthorized = yield select(getIsAuthorized);
        const localStorageToken = yield call(getTokenFromLocalStorage);
        let token;

        if (!isAuthorized) {
            if (localStorageToken !== '') {
                token = localStorageToken;
                yield put(loginSuccess());
            } else {
                const action = yield take([loginSuccess, registSuccess]);
                token = action.payload;
            }
        }
        yield call(setTokenApi, token);
        yield call(setTokenToLocalStorage, token);
        yield take(logout);
        yield call(removeTokenFromLocalStorage);
        yield call(clearTokenApi);
    }
}
