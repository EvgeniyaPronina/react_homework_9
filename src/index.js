import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import AppRouter from './components/AppRouter/AppRouter';
import createStore from './store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
// import registerServiceWorker from './registerServiceWorker';

import './styles/index.css'
import './styles/reset.css'

const store = createStore();

store.subscribe(() => {
    const state = store.getState()

    localStorage.setItem('state-isAuthorized', JSON.stringify(state.login.isAuthorized))
})


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// registerServiceWorker();
