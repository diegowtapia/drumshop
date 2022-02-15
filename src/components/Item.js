import { Card, Button } from "react-bootstrap";

const Item = ({ img, name, stock, price, id }) => {
    return (
      <div className="container">    
        <div className="row">   
            <div className="col-md-4 bg-info">  
                <Card style={{ width: '18rem', margin: '6px' }}>
                <Card.Img variant="top" src={img}/>                
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Precio: $ {price} <br/>
                        Stock: {stock}         
                    </Card.Text>
                    <Button variant="primary">Comprar</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
      </div>
    );
};

export default Item;