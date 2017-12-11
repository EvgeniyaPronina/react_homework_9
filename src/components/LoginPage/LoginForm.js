import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Input, Button } from 'semantic-ui-react'

import { loginRequest } from '../../actions/loginActions';
import Logo from './Logo'

class LoginForm extends PureComponent{

    state = {
        email: '',
        pass: ''
    }

    componentWillReceiveProps(newProps) {
        const { email,  pass} = newProps;
        this.setState({ email: email, pass: pass})
    }

    handleChangeInput = e => {
        let inputVal = e.target.value;
        let inputName = e.target.name;
        this.setState({ [inputName]: inputVal });
    };

    handleLogin = () => {
        let { email, pass } = this.state;
        let { loginRequest } = this.props;
        loginRequest(email, pass);
    };

    render(){
        const {isRegistered, error} = this.props

        return (
            <div className="LoginForm-cont">
                <Logo />
                <div className="LoginForm">
                    <Input fluid icon='user' iconPosition='left' placeholder='login' className='login__input' name="email" onChange={this.handleChangeInput} />
                    <Input fluid icon='lock' iconPosition='left' placeholder='password' className='login__input' name="pass" onChange={this.handleChangeInput} />
                    {isRegistered === true
                        ? <Button fluid color='blue' className='login__button' onClick={this.handleLogin}>Войти</Button>
                        : <Button fluid color='blue' className='login__button'>Зарегистрироваться</Button>
                    }
                    {error && <p className="error">{error}</p>}
                </div>
            </div>
        );
    };

}

LoginForm.propTypes = {
    // isAuthorized: PropTypes.boolean,
    isRegistered: PropTypes.boolean,
    error: PropTypes.string,
    email: PropTypes.string,
    pass: PropTypes.string,
};

const mapStateToProps = state => ({
    // isAuthorized: state.login.isAuthorized,
    isRegistered: state.registration.isRegistered,
    error: state.login.error,
    email: state.login.email,
    pass: state.login.pass,
});

const mapDispatchToProps = dispatch => {
    return {
        loginRequest: (email, pass) => {
            dispatch(loginRequest(email, pass));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);