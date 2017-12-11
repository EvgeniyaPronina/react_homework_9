import {toRegister, toLogin} from '../actions/registActions';
import {handleActions} from 'redux-actions';

const initialState = {
    isRegistered: true,
}

const registration = handleActions(
    {
        [toRegister]: () => ({isRegistered: false}),
        [toLogin]: () => ({isRegistered: true})
    },
    initialState
);

export default registration

export const getIsRegistered = state => state.isRegistered
