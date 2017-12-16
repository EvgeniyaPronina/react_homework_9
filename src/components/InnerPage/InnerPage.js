import React, { PureComponent } from 'react';

import Header from './Header'
import Content from './Content'
import Footer from './Footer'

import './innerPage.css'

class InnerPage extends PureComponent{

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

export default InnerPage
