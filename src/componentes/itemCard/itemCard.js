import React from 'react';

//CSS
import './itemCard.css';

//Componentes
import Card from 'react-bootstrap/Card';

//Context
import { useContext  } from 'react';
import { CartContext } from '../cartContext/cartContext';
import { Link } from "react-router-dom";

const ItemCard = ({data}) => {

  const { addCart } = useContext(CartContext);

  const handleClickAddCart = () => {
    addCart(data);
  }
  
  return (
    <Card style={{ width: '18rem' }} className='card-container'>
      <Link to={`/detail/${data.id}`} className='link-aesthetic'>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title className='card-title'>{data.title}</Card.Title>
        <Card.Text className='card-description'>
          {data.author}
        </Card.Text>
        <Card.Text className='card-description'>
          ${data.price} | Stock: {data.stock}
        </Card.Text>
      </Card.Body>
      </Link>
      <button className='boton' onClick={handleClickAddCart}>Agregar al Carrito</button>
    </Card>
  );
}

export default ItemCard;