import React from "react";
import { Link } from "react-router-dom";

function BtnItemDetail() {
    return (
        <>
            <section className="d-flex align-items-center mb-2">
                <Link to="/" className="btn btn-outline-success me-2">
                    Seguir Comprando
                </Link>
                <Link to="/cart" className="btn btn-outline-primary ms-2">
                    Ver Carrito
                </Link>
            </section>
        </>
    );
}

export default BtnItemDetail;