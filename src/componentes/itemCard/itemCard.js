import './itemCard.css';
import Card from 'react-bootstrap/Card';
import logo from '../../img/sakura-manga-logo.jpg'

const ItemCard = ({data}) => {
  return (
    <Card style={{ width: '18rem' }} className='card-container'>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title className='card-title'>{data.name}</Card.Title>
        <Card.Text className='card-description'>
          {data.email}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ItemCard;