import React from "react";
import { Link } from "react-router-dom";

export const Cart = () => { 
    

    return ( 
    <section className="  d-flex flex-column justify-content-center align-items-center mt-3">
        <p>SECCIÓN CART</p>
        <Link to="/" className="btn btn-outline-primary">
                    Volver al Home
        </Link>
    </section>
    )
}


