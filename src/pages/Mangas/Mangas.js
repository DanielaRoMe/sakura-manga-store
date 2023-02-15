import React from 'react';
import logo from '../../img/sakura-logo.png'
import './mangas.css'

const Mangas = () => {
    return (
        <div className='main-container'>
            <div className='greetings'>
                <h2>Proximamente</h2>
            </div>

            <div className='logo'>
                <img src={logo} />
            </div>
        </div>

    );
};

export default Mangas;