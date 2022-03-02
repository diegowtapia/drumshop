import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Card, Col, Row } from "react-bootstrap";
import { useCartContext }   from "../../context/CartContext";
import baseDeDatos from "../Productos/productos.json"
import { Counter } from "../ItemCount/Counter";
import  BtnItemDetail  from "../ItemDetailContainer/BtnItemDetail";


export const ItemDetail = ({ productos, idProducto }) => {
    
    const [cant, setCant] = useState(1);
    const [btn, setBtn] = useState(false);
    let { id, name, price, category, description, img, stock } = productos && idProducto ? productos : "";
    const { carrito, addToCart } = useCartContext();    
    //const { stockItem, setStockItem } = useState(null);

   
    /*

    // setea el stock en base a lo que hay en el carrito
    let repetido = carrito.find((p) => p.id === id);
    if (repetido) {
        setStockItem(stock - repetido.cant);
    }
    */


    // resta 1 a cant
    function subtractCant() {
        setCant(cant - 1);
    }

    // suma 1 a cant
    function addCant() {
        setCant(cant + 1);
    }

    // manda al carrito el item
    function pushToCart() {
        addToCart(
            {
                id ,
                name,
                price,
                category,
                description,
                img,
                cant,
            },

            cant
        );

        setCant(1);

        setBtn(true);
    }

    return (
        <Card style={{ width: "90%", margin: "auto" }}>
            <Row>
                <Col xs={12} md={8}>
                    <Card.Img
                        src={img}
                        alt={name}
                        style={{ height: "25rem", objectFit: "contain" }}
                    />
                </Col>

                <Col xs={12} md={4} className="d-flex">
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text style={{ fontSize: "1.5rem" }}>
                        ${new Intl.NumberFormat().format(price)}
                        </Card.Text>            
                        <Card.Text>(Quedan {baseDeDatos[id].stock} disponibles)</Card.Text>

                        {baseDeDatos[id].stock > 0 && (
                            <>
                                <Counter
                                    cant={cant}
                                    addCant={addCant}
                                    subtractCant={subtractCant}
                                    stockItem={baseDeDatos[id].stock}
                                />

                                <div className="d-flex mb-3">
                                    <Button
                                        onClick={pushToCart}
                                        className="btn btn-outline-dark me-2"
                                    >
                                        Agregar Al Carrito
                                    </Button>
                                </div>
                                
                                
                            </>
                        )}

                        {(btn || baseDeDatos[id].stock === 0 ) && <BtnItemDetail />}
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );

}