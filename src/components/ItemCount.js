import React, {useState} from "react";
import { Button } from 'react-bootstrap';

const Counter = ({ stock, initial, onAdd }) => {
    const [number, setNumber] = useState(0);

    const add = () => {
        number < stock && setNumber(number + 1);
    };
    const substract = () => {
        number > initial && setNumber(number - 1);
    };

    return (
        <div className="container">
            <div>
                <Button onClick={add} className="btn card" variant="success">+</Button>
                    <br/>
                    <p>{number}</p>
                <Button onClick={substract} className="btn card" variant="danger">-</Button>
            </div>
            <div>
                <br/>
                <Button
                    disabled={number === 0}
                    className={number === 0 ? 'disabled' : 'add'}
                    onClick={() => onAdd(number)}
                    variant="dark">
                    Agregar al carrito
                </Button>
            </div>
        </div>
    );
}


export default Counter;