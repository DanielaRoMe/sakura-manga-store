import React from 'react';
import { useState, useEffect } from 'react';
import ItemCard from '../itemCard/itemCard';
import { Link } from "react-router-dom";
import './itemList.css';

const ItemList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((json) => setBooks(json))
    }, []);

    return (
        <div className='container'>
            {books.map(book => {
                return (
                    <Link to={`/detail/${book.id}`} className='link-aesthetic'>
                        <ItemCard key={book.id} data={book} />
                    </Link>
                )
            })};
        </div>
    );
};

export default ItemList;