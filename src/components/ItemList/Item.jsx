import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

export const Item = ({id, name, img, price}) => {

     return (
       <>
       <Card style={{ width: "15rem" }} className="my-3 item__cart">
        <Link to={`/items/${id}`} title={name}>
          <Card.Img
              variant="top"
              src={img}
              style={{ height: "9rem", objectFit: "contain" }}
          />
        </Link>
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <Link
            to={`/items/${id}`}
            style={{ color: "#212529", textDecoration: "none" }}
          >        
            <Card.Title className="text-center">{name}</Card.Title>
          </Link>
          <Card.Text className="text-center">
            ${new Intl.NumberFormat().format(price)}
          </Card.Text>
          <div className="d-flex">
            <Link to={`/items/${id}`} className="btn btn-outline-dark me-2">
              Ver más
            </Link>
          </div>
        </Card.Body>    
        </Card>
       
       </>
     );
}



      