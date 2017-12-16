import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {toRegister, toLogin} from '../../actions/registActions';
import {getIsRegistered} from '../../reducers/loginReducer'

class Content extends PureComponent{

    render(){

        return (
            <div className="Content">
                Внутренняя страница
            </div>
        );
    };

}

// Content.propTypes = {
//     isRegistered: PropTypes.boolean,
//     toRegister: PropTypes.func,
//     toLogin: PropTypes.func,
// };

const mapStateToProps = state => ({
    // isRegistered: getIsRegistered(state),
});

const mapDispatchToProps = dispatch => {
    // return {
    //     // toRegister: () => {
    //     //     dispatch(toRegister());
    //     // },
    //     // toLogin: () => {
    //     //     dispatch(toLogin());
    //     },
    // };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);
