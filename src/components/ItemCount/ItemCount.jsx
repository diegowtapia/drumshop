export const ItemCount = ({ count, add, sub, condition, stock  }) => {

    return (
      <>
            
        <div className="row mt-5">
          <div className="col d-flex justify-content-center">
            <button
              className="btn btn-danger"
              type="button"
              onClick={sub}
              disabled={condition || count === 0}
            > - </button>
          </div>
          <div className="col d-flex justify-content-center">
            <h3> {count} </h3>
  
          </div>
          <div className="col d-flex justify-content-center">
            <button
              className="btn btn-success"
              type="button"
              onClick={add}
              disabled={condition || count >= stock}
            
            > + </button>
          </div>
        </div>
      </>
    );
  };
  


{/*import {useState} from "react";
import { Button, Card } from 'react-bootstrap';

const Counter = ({ stock, initial, onAdd }) => {
    const [number, setNumber] = useState(1);

    const add = () => {
        number < stock && setNumber(number + 1);
    };
    const substract = () => {
        number > initial && setNumber(number - 1);
    };

    return (
        <div className="container">
            
                
                <br/>
                <Card style={{ width: '10rem', borderColor: 'grey', height: '200px' }}>                
                <Card.Body>
                    <Card.Title style={{ textAlign: 'center', color: 'black' }}>{number}</Card.Title>
                        <div className="btn">
                            <Button onClick={add} variant="outline-success">+</Button>
                            <Button onClick={substract} variant="outline-danger">-</Button>
                        </div>
                          
                
                    <Button
                        disabled={number === 0}
                        className={number === 0 ? 'disabled' : 'add'}
                        onClick={() => onAdd(number)}
                        variant="dark">
                        Agregar al carrito
                    </Button>
                </Card.Body>
                </Card> 
            
        </div>
    );
}


export default Counter;*/}