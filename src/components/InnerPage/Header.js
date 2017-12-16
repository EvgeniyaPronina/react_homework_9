import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import {selectBtc, selectEth} from '../../actions/currencyActions';
import {getSelectedCurrency} from '../../reducers/currencyReducer'

import Logo from '../LoginPage/Logo'

class Header extends PureComponent{

    handleSelectEth = () => {
        const {selectEth} = this.props
        selectEth();
    }

    render(){
        const {email, BTCRate, ETHRate} = this.props
        const {selectedCurrency, selectBtc, selectEth} = this.props
        return (
            <div className="Header">
                <div className="Header__inner-cont">
                    <Logo />
                    <div className="switcher">
                        <ul>
                            <li onClick={() => selectBtc()} className={selectedCurrency === 'btc' ? 'active' : null}>
                                <Link to="/trade/btc">
                                    {BTCRate}
                                    <span>1 BTC</span>
                                </Link>
                            </li>
                            <li onClick={this.handleSelectEth} className={selectedCurrency === 'eth' ? 'active' : null}>
                                <Link to="/trade/eth">
                                    {ETHRate}
                                    <span>1 ETH</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="info">
                        {email}
                    </div>
                </div>
            </div>
        );
    };

}

Header.propTypes = {
    selectedCurrency: PropTypes.string,
    selectBtc: PropTypes.func,
    selectEth: PropTypes.func,
};

const mapStateToProps = state => ({
    selectedCurrency: getSelectedCurrency(state),
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);


