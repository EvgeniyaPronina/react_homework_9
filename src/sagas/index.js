import { all, fork } from 'redux-saga/effects'
import loginSaga from './loginSaga'
import { currencyWatch } from './currencySaga'


export default function* rootSaga () {
    yield all([
        fork(loginSaga),
        fork(currencyWatch)
    ])
}

