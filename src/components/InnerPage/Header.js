import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Header extends PureComponent{

    render(){
        return (
            <div className="Header">
                Header
            </div>
        );
    };

}

// Header.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);

