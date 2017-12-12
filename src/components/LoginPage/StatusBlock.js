import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {toRegister, toLogin} from '../../actions/registActions';
import {getIsRegistered} from '../../reducers/loginReducer'

class StatusBlock extends PureComponent{

    render(){
        const {isRegistered, toRegister, toLogin} = this.props

        return (
            <div className="StatusBlock">
                {isRegistered === true
                    ? <p>Впервые на сайте? <span className="StatusBlock__link" onClick={toRegister}>Регистрация</span></p>
                    : <p>Уже зарегистрированы? <span className="StatusBlock__link" onClick={toLogin}>Войти</span></p>
                }
            </div>
        );
    };

}

StatusBlock.propTypes = {
    isRegistered: PropTypes.boolean,
    toRegister: PropTypes.func,
    toLogin: PropTypes.func,
};

const mapStateToProps = state => ({
    isRegistered: getIsRegistered(state),
});

const mapDispatchToProps = dispatch => {
    return {
        toRegister: () => {
            dispatch(toRegister());
        },
        toLogin: () => {
            dispatch(toLogin());
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(StatusBlock);
