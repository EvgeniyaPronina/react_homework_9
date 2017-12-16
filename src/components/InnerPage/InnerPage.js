import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from "react-router-dom";
import {selectBtc, selectEth} from '../../actions/currencyActions';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import './innerPage.css'

class InnerPage extends PureComponent{

    setCurrency = (currency) => {
        const { selectBtc, selectEth } = this.props;
        if (currency === "btc") {
            selectBtc();
        } else {
            selectEth();
        }
    };

    componentDidMount() {
        const {currency} = this.props.match.params;
        this.setCurrency(currency);
    }

    componentWillReceiveProps(newProps) {
        const {currency} = this.props.match.params;
        const newCurrency = newProps.match.params.currency;
        if (currency && currency !== newCurrency) {
            this.setCurrency(newCurrency);
        }
    }


    render(){

        return (
            <div className="InnerPage">
                <Header email="UserEmail" BTCRate={15882.2} ETHRate={693.0} />
                <Content/>
                <Footer/>
            </div>
        );
    };

}

InnerPage.propTypes = {
    selectBtc: PropTypes.func,
    selectEth: PropTypes.func,
};

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => {
    return {
        selectBtc: () => {
        dispatch(selectBtc());
    },
    selectEth: () => {
        dispatch(selectEth());
    },
};
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(InnerPage)
);
