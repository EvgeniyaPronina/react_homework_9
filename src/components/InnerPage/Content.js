import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import {LineChart} from 'react-chartkick';
import {selectOffset} from '../../actions/currencyActions';
import {getSelectedCurrency, getOffset} from '../../reducers/currencyReducer'

const offsets = {
    '2h': '2ч',
    '4h': '4ч',
    '8h': '8ч',
    '1d': '1д',
    '7d': '7д',
};

class Content extends PureComponent{

    handleTimeClick = (e) => {
        const time = e.target.value
        const {selectOffset} = this.props
        selectOffset(time)
    }

    render(){
        const {selectedCurrency, offsetTime} = this.props
        console.log(selectedCurrency)
        console.log(offsetTime)

        return (
            <div className="Content">
                <h3>Окно графика</h3>
                <div className="offset-cont">
                    <ul>
                        {Object.keys(offsets).map((key) => (
                            <li key={key}>
                                <button onClick={this.handleTimeClick} value={key}>{offsets[key]}</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="cart-cont">
                    <LineChart
                    data={[{name: 'Продажа', data: 15000.0}, {name: 'Покупка', data: 14000.0}]}
                    min={10000.0}
                    max={20000.0}
                    width={750}
                    height={400}
                    />
                </div>
            </div>
        );
    };

}

Content.propTypes = {
    selectedCurrency: PropTypes.string,
    offsetTime: PropTypes.string,
};

const mapStateToProps = state => ({
    selectedCurrency: getSelectedCurrency(state),
    offsetTime: getOffset(state),
});

const mapDispatchToProps = dispatch => {
    return {
        selectOffset: (time) => {
            dispatch(selectOffset(time));
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Content);



{/* { selectedCurrency === 'btc' */}
//     ? <LineChart
//     data={[{name: 'Продажа', data: sellBtc}, {name: 'Покупка', data: purchaseBtc}]}
//     min={minBtc}
//     max={maxBtc}
{/*width={750}*/}
{/*height={400}*/}
{/*/>*/}
{/*: <LineChart*/}
{/*data={[{name: 'Продажа', data: sellEth}, {name: 'Покупка', data: purchaseEth}]}*/}
{/*min={minEth}*/}
{/*max={maxEth}*/}
{/*width={750}*/}
{/*height={400}*/}
{/*/>*/}
{/*}*/}

