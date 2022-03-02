import React from "react";
import { Button } from "react-bootstrap";

export const Counter = ({ cant, subtractCant, addCant, stockItem }) => {
    return(
        <section className="d-flex align-items-center mb-2">
                <Button 
                    disabled={cant === 1}
                    onClick={subtractCant}
                    className="btn btn-danger btn-sm"
                >
                    -
                </Button>

                <p className="my-0 mx-2">{cant}</p>

                <Button
                     disabled={cant === stockItem}
                     onClick={addCant}
                     className="btn btn-success btn-sm"   
                >
                    +
                </Button>
        </section>
    );
}