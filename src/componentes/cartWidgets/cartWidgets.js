import React from 'react';

//Context
import { useContext } from 'react';
import { CartContext } from '../cartContext/cartContext';

//FontAwesome Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBasketShopping} from '@fortawesome/free-solid-svg-icons';

//CSS
import '../cartWidgets/cartWidgets.css';

const CartWidget = ({handleClickOpenModal}) =>{

    const { cartCounter } = useContext(CartContext);

    return (
        <button className='button-container' onClick={handleClickOpenModal}>
            <FontAwesomeIcon icon={faBasketShopping} className='fa-2x'/> 
            { cartCounter ? cartCounter : 0 }
        </button>          
    )
};

export default CartWidget;