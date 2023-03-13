import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";


//Componentes
import ItemCard from "../../componentes/itemCard/itemCard";

//Firebase
import { db } from "../../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

const NewDiscoveries = () => {
  const [discoveries, setDiscoveries] = useState([]);
  const { year } = useParams();

  const date = new Date();
  const lastYear = date.getFullYear() - 1;

  useEffect(() => {
    const getNew = async () => {
      const q = query(collection(db, "books"), where("year", ">=", lastYear));
      const docs = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDiscoveries(docs);
    };
    getNew();
  }, [year, lastYear]);

  return (
    <div className="main-container">
      <div className="greetings">
        <h2>Lanzamientos del Ultimo año</h2>
      </div>

      <div className="manga-card-container">
        {discoveries.map((manga) => {
          return (
              <ItemCard key={manga.id} data={manga} />
          );
        })}
      </div>
    </div>
  );
};

export default NewDiscoveries;
