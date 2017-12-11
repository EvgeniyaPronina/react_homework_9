import React, { Component } from 'react';
import Particles from 'react-particles-js';
import {default as params}  from '../../helpers/particles-params'

class App extends Component{

    render(){
        return (
            <Particles
                params={params}
                style={{
                    width: '100%',
                    backgroundImage: ``
                }
                }
            />
        );
    };

}

export default App;

