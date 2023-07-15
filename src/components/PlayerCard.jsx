import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import "../index.css";

const PlayerCard = ({name ,img , statistics}) => {

  const[showImage , setShowImage] = useState(true);

  return (
    <Col>
    <Card onClick={()=>setShowImage(!showImage)}
    className='player-card' role='button'
    >

      {showImage ? (
      <Card.Img 
      variant="top" 
      src={img}  
      height="230px" 
      // onClick={()=>setShowImage(false)}
      />
      ) : (
      <ul className='m-auto'
      // onClick={()=>setShowImage(true)}
      >
       {
        statistics.map((item,i)=>
        <li className = "list-unstyled h5 text-start" key = {i}>🏹
         {item}
        </li>
        )
       }
        </ul>)
      }
    
    
    <Card.Footer>
    <Card.Title className='card-title'>{name}</Card.Title>
    </Card.Footer>
  </Card></Col>

  )
}

export default PlayerCard
