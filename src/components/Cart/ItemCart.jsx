import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext }   from "../../context/CartContext";
import baseDeDatos from "../Productos/productos.json";


function ItemCart({ id, img, name, description, price, cant } ) {
    const { borrarProducto } = useCartContext();
    //const datos = baseDeDatos;
    return (
        <Card style={{ maxWidth: "600px" }} className="item__cart mt-3">
            <Row>
                <Col
                    xs={5}
                    className="d-flex justify-content-center align-items-center"
                >
                    <Link to={`/items/${id}`} title={name}>
                        <Card.Img
                            variant="top"
                            src={img}
                            style={{ height: "9rem", objectFit: "contain"}}
                        />
                    </Link>
                </Col>

                <Col xs={7}>
                    <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                        <Link
                            style={{ color: "black", textDecoration: "none" }}
                            to={`/items/${id}`}
                            title="Ver producto"
                        >
                            <Card.Title>{name}</Card.Title>
                        </Link>
                        <Card.Text>{description}</Card.Text>
                        <Card.Text>
                            ${new Intl.NumberFormat().format(price)} x {cant} = $
                            {new Intl.NumberFormat().format(price * cant)}
                        </Card.Text>

                        <Button
                            onClick={() => borrarProducto(id)}
                            className="btn btn-danger"
                        >
                            Eliminar del carrito
                        </Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}
export default ItemCart;