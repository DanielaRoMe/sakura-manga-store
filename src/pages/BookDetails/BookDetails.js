import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import ItemCard from '../../componentes/itemCard/itemCard';
import './bookDetails.css'


const BookDetails = () => {
    const [book, setBook] = useState({});

    let { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => response.json())
            .then((json) => { setBook(json) })
    }, [id]);

    return (
        <div key={book.id} className='item-container'>
            <ItemCard data={book} />
        </div>
    )
}

export default BookDetails;