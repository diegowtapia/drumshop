import React, { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext";
import { Counter } from "../ItemCount/Counter";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom"
import BtnItemDetail from "../ItemDetailContainer/BtnItemDetail";

export const ItemDetail = ({ productos }) => {
  //const [count, setCount] = useState(0);
  const [qty, setQty] = useState(0);
  //const { addItem, show, handleShow } = useCartContext();
  const { addToCart, show, handleShow } = useContext(CartContext);
  const onAdd = (cantidad) => {
    setQty(cantidad);
    addToCart(productos, cantidad);
};

 return (
    <>
        <Card style={{ width: "90%", margin: "auto" }}>
            <Row>
                <Col xs={12} md={8}>
                    <Card.Img
                        src={productos.img}
                        alt={productos.name}
                        style={{ height: "25rem", objectFit: "contain" }}
                    />
                </Col>

                <Col xs={12} md={4} className="d-flex">
                    <Card.Body>
                        <Card.Title>{productos.name}</Card.Title>
                        <Card.Text>{productos.description}</Card.Text>
                        <Card.Text style={{ fontSize: "1.5rem" }}>
                        ${new Intl.NumberFormat().format(productos.price)}
                        </Card.Text>            
                        

                        {qty === 0 ? (
                         <Counter stock={productos?.stock} onAdd={onAdd} className='justify-content-center' />
                         ) : (
                            <>
                            <p>Agregaste <strong>{qty} {productos?.name}</strong> al carrito, ¿Qué deseas seguir haciendo? </p>
                                <BtnItemDetail/>
                              
                            </>
                        )}                       
                        
                       
                    </Card.Body>
                </Col>
            </Row>
        </Card>
        </>
  );
};
