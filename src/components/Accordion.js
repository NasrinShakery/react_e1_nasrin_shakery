import React, { Component } from 'react';

import Header from './Header';
import Panel from './Panel';

class Accordion extends Component {
    state = {  } 
    render() { 
        return (
            <>
                <Header></Header>
                <Panel></Panel>
            </>
        );
    }
}
 
export default Accordion;