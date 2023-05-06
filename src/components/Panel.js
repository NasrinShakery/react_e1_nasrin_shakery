import React, { Component } from 'react';

import '../styles/panel.css'

import Product from './Product';

// images 
import img1 from '../assets/images/8.jpg';
import img2 from '../assets/images/a.jpg';
import img3 from '../assets/images/b0.jpg';
import img4 from '../assets/images/c.jpg';

class Panel extends Component {
    constructor(){
        super();
        this.state = {
            panel : false
        }
    }
    
    render() { 
        return (
            <>
                
                <div className='panel'>
                    <Product img={img1} productName='Product_1' productPrice='23$'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aspernatur esse aut itaque commodi dolore nam adipisci ab placeat officiis?</Product>
                    <Product img={img2} productName='Product_2' productPrice='23$'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eligendi provident pariatur. Eius maxime dolorem magni adipisci, vitae facere voluptatum!</Product>
                    <Product img={img3} productName='Product_3' productPrice='23$'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eligendi provident pariatur. Eius maxime dolorem magni adipisci, vitae facere voluptatum!</Product>
                    <Product img={img4} productName='Product_4' productPrice='23$'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit eligendi provident pariatur. Eius maxime dolorem magni adipisci, vitae facere voluptatum!</Product>
                </div>
                
            </>
        );
    }
}
 
export default Panel;