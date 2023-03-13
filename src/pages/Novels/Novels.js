import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";


//Componentes
import ItemCard from "../../componentes/itemCard/itemCard";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const Novels = () => {
  const [novelas, setNovelas] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    const getNovelas = async () => {
      const q = query(collection(db, "books"), where("type", "==", "novela"));
      const docs = [];
      const querySnapshot = await getDocs(q);

      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });

      setNovelas(docs);
    };
    getNovelas();
  }, [type]);

  console.log(novelas);

  return (
    <div className="main-container">
      <div className="greetings">
        <h2>Novelas</h2>
      </div>

      <div className="manga-card-container">
        {novelas.map((novela) => {
          return (
              <ItemCard key={novela.id} data={novela} />
          );
        })}
      </div>
    </div>
  );
};

export default Novels;
