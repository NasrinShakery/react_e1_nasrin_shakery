import React, { Component } from 'react';
import '../styles/header.css'

class Header extends Component {
    constructor(){
        super();
        this.state = {
            flag: true
        }
    }
    change = ()=>{
        this.setState ( {flag: !this.state.flag})
        
        document.querySelector('.panel').style.display = this.state.flag ? 'none' : 'flex';
        
    }
    render() { 
        
        return (
            <>
                {
                    this.state.flag ? 
                    (
                        <div className='headerOn'>
                            <h2 >Confectionery products</h2>
                            <span className='spanStyleOn' onClick={this.change}>^</span>
                        </div>
                    )
                    :
                    (
                        <div className='headerOff'>
                            <h2 >Confectionery products</h2>
                            <span className='spanStyleOff' onClick={this.change}>^</span>
                        </div>
                    )
                }
                
            </>
        );
    }
}
 
export default Header;