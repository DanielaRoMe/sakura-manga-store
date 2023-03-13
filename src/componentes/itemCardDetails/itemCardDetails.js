import React from "react";

//CSS
import "./itemCardDetails.css"


const ItemCardDetails = ({data}) => {
  return (
    <div className='card-detail-container'>
        <div className='container-img'>
            <img src={data.img} alt='logo' className="img-details"/>
        </div>
        <div className='container-text'>
            <h2 className='title'>{data.title}</h2>
            <p>Año de lanzamiento: {data.year}</p>
            <p>Autor: {data.author}</p>
            <p>Descripcion:
                <br/>
                {data.description}
            </p>
        </div>
    </div>
  )
}

export default ItemCardDetails;