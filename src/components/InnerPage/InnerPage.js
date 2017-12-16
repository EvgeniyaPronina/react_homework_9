import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {getIsAuthorized} from '../../reducers/loginReducer'

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import './innerPage.css'

class InnerPage extends PureComponent{

    render(){
        const {isAuthorized} = this.props
        console.log(isAuthorized)
        return (
            <div className="InnerPage">
                <Header />
                <Content />
                <Footer/>
            </div>
        );
    };

}

// InnerPage.propTypes = {
//     isAuthorized: PropTypes.boolean,
// };

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(InnerPage);
