import { all, fork } from 'redux-saga/effects'
import authSaga from './authSaga'
import loginSaga from './loginSaga'


export default function* rootSaga () {
    yield all([
        fork(authSaga),
        fork(loginSaga)
    ])
}

