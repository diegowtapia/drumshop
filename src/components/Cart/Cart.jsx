import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useCartContext }  from "../../context/CartContext";
import  ItemCart  from "../Cart/ItemCart";
import "../Cart/Cart.css";
import baseDeDatos from "../Productos/productos.json"



function Cart () { 
    const  { carrito, precioTotal, vaciarCarrito } = useCartContext();
    
    
    return ( 
        
        <section className="container">
            <h2>Cart Section</h2>
            
            
                {carrito.length > 0 ? (
                    carrito.map((p) => (
                        <ItemCart
                            
                            id={p.id}
                            img={p.img}
                            name={p.name}
                            description={p.description}
                            price={p.price}                                                        
                            cant={p.cant}                            
                        />
                        
                    ))   
                    
                ) : (
                    
                    <section className="d-flex flex-column justify-content-center align-items-center mt-3">
                        <h2>Su carrito está vacío</h2>
                        <p>Agregue algo y lo verá aqui..</p>
                        <Link to="/" className="btn btn-outline-primary">
                            Volver al Home
                        </Link>
                        
                    </section>
                )}               
                
                
                {carrito.length > 0 && (
                    <p className="my-3">
                        TOTAL: ${new Intl.NumberFormat().format(precioTotal())}
                    </p>
                )}

                {carrito.length > 0 && (
                    <section  className="d-flex align-items-center mb-3">
                        <Link to="/checkout" className="btn btn-success me-2">
                            Comprar
                        </Link>
                        <button 
                            onClick={vaciarCarrito}     
                            className="btn btn-outline-danger ms-2"
                        >
                            Vaciar Carrito
                        </button>
                    </section>
                )}
            </section>
              
    );
}

export default Cart;

