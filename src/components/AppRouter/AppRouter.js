import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';

import {getIsAuthorized} from '../../reducers/loginReducer'
import App from '../AppPage/App';
import LoginPage from '../LoginPage';
import InnerPage from '../InnerPage';

class AppRouter extends Component {
    render() {
        const {isAuthorized} = this.props

        return (
            <div className="App">
                <Switch>
                    {isAuthorized === true ? (
                        <Route path="/" exact component={InnerPage} />
                    ) : (
                        <Route path="/*" component={LoginPage} />
                    )}
                    <Route path="/login" component={LoginPage} />
                </Switch>
            </div>
        );
    }
}

// AppRouter.propTypes = {
//     isAuthorized: PropTypes.boolean,
// };

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

export default withRouter(connect(mapStateToProps)(AppRouter));
