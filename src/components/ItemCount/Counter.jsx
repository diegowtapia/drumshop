import React from "react";
import { Button } from "react-bootstrap";
import { useState } from "react";

export const Counter = ({ stock, onAdd }) => {

    const [number, setNumber] = useState(0);

    const add = () => {
        number < stock && setNumber(number + 1);
    };

    const substract = () => {
        number > 0 && setNumber(number - 1);
    };

    return (
        <>
        <section className="d-flex align-items-center mb-2">
                <Button 
                    onClick={substract}
                    className="btn btn-danger btn-sm"
                >
                    -
                </Button>

                <p className="my-0 mx-2">{number}</p>

                <Button
                     onClick={add}
                     className="btn btn-success btn-sm"   
                >
                    +
                </Button>
        </section>
        
        <section>

            <div className="d-flex mb-3">
                <Button    
                    disabled={number === 0}
                    className={number === 0 ? 'disabled' : 'add'}
                    onClick={() => onAdd(number)}                     
                >
                     Agregar Al Carrito
                </Button>
            </div>

        </section>
        </>
    );
};




