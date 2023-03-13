import React from 'react';
import { useState, useEffect } from 'react';

//Componentes
import ItemCard from '../itemCard/itemCard';

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

//CSS
import './itemList.css';

const ItemList = () => {

    const [books, setBooks] = useState([]);

    useEffect (() => {
        const getBooks = async () =>{
            const q = query(collection (db, "books"));
            const querySnapshot = await getDocs(q);
            const docs = [];
            querySnapshot.forEach ((doc) => {
                docs.push({...doc.data(), id: doc.id})
            });
            setBooks(docs);
        }
        getBooks()
    },[])

    // console.log(books);
    return (
        <div className='container'>
            {books.map(book => {
                return (
                    <ItemCard key={book.id} data={book} />
                )
            })}
        </div>
    );
};                      

export default ItemList;