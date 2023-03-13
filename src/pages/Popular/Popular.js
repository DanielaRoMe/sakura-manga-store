import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";


//Componentes
import ItemCard from "../../componentes/itemCard/itemCard";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Popular = () => {
  const [mangas, setMangas] = useState([]);
  const { popular } = useParams();

  useEffect(() => {
    const getMangas = async () => {
      const q = query(collection(db, "books"), where("popular", "==", true));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setMangas(docs);
    };
    getMangas();
  }, [popular]);

  console.log(mangas);

  return (
    <div className="main-container">
      <div className="greetings">
        <h2>Populares</h2>
      </div>

      <div className="manga-card-container">
        {mangas.map((manga) => {
          return (
              <ItemCard key={manga.id} data={manga} />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
