import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { Card, Col, Row, Button } from "react-bootstrap";
import sadFace from "../img/sad.png";
import { db, updateStock } from "../../services/getFirebase";
import Swal from "sweetalert2";


const Cart = () => {
  const { cart, clear, removeItem, } = useContext(CartContext);  


  return (
    
      <div className='container'>
          {cart.length > 0 ? `Productos agregados al carrito:` 
          : <section className="d-flex flex-column justify-content-center align-items-center mt-3">
          <h2>Su carrito está vacío</h2>
          <p>Agregue algo y lo verá aqui..</p>
          <img src={sadFace} alt="sad-face"></img>
          <Link to="/" className="btn btn-outline-primary">
              Volver al Home
          </Link>
       
          </section>
          }        
          
        
          
              
           
          
          {cart.length > 0 && (
              <><div>
                  {cart.map((prod) => (

                      <Card style={{ maxWidth: "600px" }} className="item__cart mt-3">
                      <Row>
                          <Col
                              xs={5}
                              className="d-flex justify-content-center align-items-center"
                          >
                              <Link to={`/items/${prod.id}`} title={prod.name}>
                                  <Card.Img
                                      variant="top"
                                      src={prod.img}
                                      style={{ height: "9rem", objectFit: "contain"}}
                                  />
                              </Link>
                          </Col>

                          <Col xs={7}>
                              <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                                  <Link
                                      style={{ color: "black", textDecoration: "none" }}
                                      to={`/items/${prod.id}`}
                                      title="Ver producto"
                                  >
                                      <Card.Title>{prod.name}</Card.Title>
                                  </Link>
                                  <Card.Text>{prod.description}</Card.Text>
                                  <Card.Text>
                                      ${new Intl.NumberFormat().format(prod.price)} x {prod.cantidad} = $
                                      {new Intl.NumberFormat().format(prod.price * prod.cantidad)}
                                  </Card.Text>

                                  <Button
                                      onClick={() => removeItem(prod.id)}
                                      className="btn btn-danger"
                                  >
                                      Eliminar del carrito
                                  </Button>
                              </Card.Body>
                          </Col>
                      </Row>
                    </Card>
                   
                  ))}
              </div>
                  <hr />
                  {`TOTAL DEL PEDIDO: $ ${cart.reduce((acum, item) => acum + (item.price * item.cantidad), 0)}`}
                  <hr />                  
                  
                  
                  <section className="ms-3">
                    <Link to="/checkout" className="btn btn-success me-2">
                      Comprar
                    </Link> 
                    <button
                      onClick={clear}
                      className="btn btn-outline-danger ms-2"
                    >
                      Vaciar TODO el carrito
                    </button>
                  </section>
             
                  
             
              </>)}

              
      </div> 
      
  );
};

export default Cart;


