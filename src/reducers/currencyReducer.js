import {combineReducers} from 'redux';
import {handleAction, handleActions} from 'redux-actions';
import {
    selectBtc,
    selectEth,
    fetchBtcRequest,
    fetchEthRequest,
    fetchBtcSuccess,
    fetchBtcFailure,
    fetchEthFailure,
    fetchEthSuccess,
    selectOffset,
} from '../actions/currencyActions';

const initialState = {
    selected: "btc",
    offset: "2h",
    btc: [],
    eth: [],
    isBtcLoading: false,
    isEthLoading: false
}

const selected = handleActions(
    {
        [selectBtc]: () => 'btc',
        [selectEth]: () => 'eth',
    },
    "btc"
);

const offset = handleActions(
    {
        [selectOffset]: (state, action) =>action.payload,
    },
    "2h"
);

export const btc = handleActions(
    {
        [fetchBtcSuccess]: (state, action) => action.payload
    },
    []
);
export const eth = handleActions(
    {
        [fetchEthSuccess]: (state, action) => action.payload
    },
    []
);

export default combineReducers({
    offset,
    selected,
    btc,
    eth
});

export const getSelectedCurrency = state => state.currencyReducer.selected;
export const getOffset = state => state.currencyReducer.offset;