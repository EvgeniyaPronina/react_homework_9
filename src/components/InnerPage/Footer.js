import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

class Footer extends PureComponent{

    render(){
        return (
            <div className="Footer">
                Footer
            </div>
        );
    };

}

// Footer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
