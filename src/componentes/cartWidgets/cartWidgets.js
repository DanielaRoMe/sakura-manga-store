import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons';
import '../cartWidgets/cartWidgets.css';

const CartWidget = ({title}) =>{
    return (
        <button className='button-container'>
            <FontAwesomeIcon icon={faBasketShopping} className='fa-2x'/> 
            {title}
        </button>          
    )
};

export default CartWidget;