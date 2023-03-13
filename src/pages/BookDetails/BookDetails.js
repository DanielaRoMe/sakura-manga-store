import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

//Componentes
import ItemCardDetails from "../../componentes/itemCardDetails/itemCardDetails";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import {
  collection,
  query,
  where,
  getDocs,
  documentId,
} from "firebase/firestore";

//CSS
import "./bookDetails.css";

const BookDetails = () => {
  const [bookDetails, setBookDetails] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getAlbums = async () => {
      const q = query(collection(db, "books"), where(documentId(), "==", id));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setBookDetails(docs);
    };
    getAlbums();
  }, [id]);

  return (
    <div className="main-container">
      {bookDetails.map((book) => {
        return (
            <div key={book.id} className="item-container">
              <ItemCardDetails data={book} />
            </div>
        );
      })}
    </div>
  );
};

export default BookDetails;
