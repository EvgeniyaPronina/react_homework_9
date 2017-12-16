import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Particles from 'react-particles-js';
import {default as params}  from '../../helpers/particles-params'
import {getIsAuthorized} from '../../reducers/loginReducer'

import LoginForm from './LoginForm'
import StatusBlock from './StatusBlock'

import './loginPage.css'

class LoginPage extends Component{

    render(){
        const {isAuthorized} = this.props
        return (
            <div>
                {isAuthorized === true
                    ? <Redirect from="/login" to="/"/>
                    : <div className="LoginPage">
                    <Particles
                        params={params}
                        style={{
                            width: '100%',
                            position: 'absolute',
                            backgroundColor: '#efefef',
                        }
                        }
                    />
                    <div className="LoginPage-inner-cont">
                        <LoginForm />
                        <StatusBlock />
                    </div>
                </div>
                }
            </div>

        );
    };

}

LoginPage.propTypes = {
    isAuthorized: PropTypes.bool,
};

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(LoginPage);
