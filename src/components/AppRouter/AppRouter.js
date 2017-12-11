import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import App from '../AppPage/App';
import LoginPage from '../LoginPage';

class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/login" component={LoginPage} />
                    <Redirect to="/" />
                </Switch>
            </div>
        );
    }
}

export default AppRouter;

