import React from 'react';
import './itemListContainer.css';


const ItemListContainer = ({children, logo}) => {
    return (
        <main className='main-container' >

            <div className='greetings'>
                {children}
            </div>

            <div className='logo'> 
                <img src={logo} />
            </div>

        </main>
    )
};

export default ItemListContainer;