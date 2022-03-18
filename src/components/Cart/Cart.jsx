import { useCartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { Card, Col, Row, Button } from "react-bootstrap";
import sadFace from "../img/sad.png";
import { db } from "../../services/getFirebase";

export const Cart = () => {
  const { cartItems, clearAll, deleteItem } = useCartContext()
  
  const sendOrder = async (e) => {
    e.preventDefault();
    let order = {
      buyer: {
        name: e.target[0].value,
        phone: e.target[1].value,
        email: e.target[2].value,
      },
      items: cartItems,
      total: cartItems.reduce((ac, items) => (ac + (items.price * items.quantity)), 0),
    };
    order.date = Timestamp.fromDate(new Date());
    const queryCollection = collection(db, "orders");
    console.log("order", order);
    try {
      const docRef = await addDoc(queryCollection, order);
      console.log('docRef', docRef.id);
      clearAll()
      order.buyer.name = e.target.reset() 
      order.buyer.phone = e.target.reset(); 
      order.buyer.email = e.target.reset(); 

    } catch (error) {
      console.log("Error", error);
    }
  };
     
  return (
    <>
      {cartItems.length === 0 ? (
         <section className="d-flex flex-column justify-content-center align-items-center mt-3">
            <h2>Su carrito está vacío</h2>
            <p>Agregue algo y lo verá aqui..</p>
            <img src={sadFace} alt="sad-face"></img>
            <Link to="/" className="btn btn-outline-primary">
                Volver al Home
            </Link>
         
        </section>
      ) : (
        <div className="container mt-5">
          {cartItems.map((i) => {
            return (
              <>
                <Card style={{ maxWidth: "600px" }} className="item__cart mt-3">
                    <Row>
                        <Col
                            xs={5}
                            className="d-flex justify-content-center align-items-center"
                        >
                            <Link to={`/items/${i.id}`} title={i.name}>
                                <Card.Img
                                    variant="top"
                                    src={i.img}
                                    style={{ height: "9rem", objectFit: "contain"}}
                                />
                            </Link>
                        </Col>

                        <Col xs={7}>
                            <Card.Body className="d-flex flex-column justify-content-between align-items-start">
                                <Link
                                    style={{ color: "black", textDecoration: "none" }}
                                    to={`/items/${i.id}`}
                                    title="Ver producto"
                                >
                                    <Card.Title>{i.name}</Card.Title>
                                </Link>
                                <Card.Text>{i.description}</Card.Text>
                                <Card.Text>
                                    ${new Intl.NumberFormat().format(i.price)} x {i.quantity} = $
                                    {new Intl.NumberFormat().format(i.price * i.quantity)}
                                </Card.Text>

                                <Button
                                    onClick={() => deleteItem(i.id)}
                                    className="btn btn-danger"
                                >
                                    Eliminar del carrito
                                </Button>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
                    <div className="text-center mt-5 mb-5">
                    <button className="btn btn-danger" onClick={clearAll}>
                    Vaciar Carrito
                    </button>
                    </div>

                    <div className="container mb-5">
        <div className="card d-flex">
          <div className="card-header bg-dark bg-gradient text-light">
            <h4 className="text-center">Orden de Compra</h4>
          </div>
          <div className="card-body">
            <div className="text-center">
              <div className="text-center h4 mt-5">
                {`Cantidad: ${cartItems.reduce(
                  (ac, item) => ac + item.quantity,
                  0
                )}`}
              </div>

              <div className="text-center h4 mt-3">
                {`Total: $ ${cartItems.reduce(
                  (ac, item) => ac + item.price * item.quantity,
                  0
                )}`}
              </div>
            </div>
            <form className="w-50 mx-auto mt-5" onSubmit={sendOrder}>
              <legend className="mb-5">Completar con tus datos para finalizar la compra</legend>
              <div className="mb-3 mt-5">
                <label htmlFor="name" className="form-label">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Ingrese su nombre"
                  required
                />
                <div className="valid-feedback">Campo válido!</div>
                <div className="invalid-feedback">Campo Incorrecto!</div>
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Teléfono
                </label>
                <input
                  type="phone"
                  className="form-control"
                  id="phone"
                  placeholder="Ingrese su teléfono"
                  required
                />
                <div className="valid-feedback">Campo válido!</div>
                <div className="invalid-feedback">Campo Incorrecto!</div>
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Ingrese su email"
                  required
                />
                <div className="valid-feedback">Campo válido!</div>
                <div className="invalid-feedback">Campo Incorrecto!</div>
              </div>

              <button className="btn btn-primary mt-5" type="submit">
                Enviar Orden
              </button>
            </form>
          </div>
        </div>
      </div>
    
    </>
    
    
  );   

})}
      
</div>
      )}
      </>)
{ /*          
            );
          })}
          </div>
           )} 
          
               
                <div className="card mb-5 p-2">
                  <div className="row">
                    <div className="col-md-4">
                      <img src={i.img} alt={i.name} className="img-fluid" />
                    </div>
                    <div className="col-md-8">
                      <h2 className="card-title mt-3">{i.name}</h2>
                      <p className="card-text h5">Cantidad: {i.quantity}</p>
                      <p className="card-text h5">
                        Importe: $ {i.quantity * i.price}
                      </p>
                      <button
                        className="btn btn-warning mx-5 mt-5"
                        onClick={() => deleteItem(i.id)}
                      >
                        Eliminar Producto
                      </button>
                   
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      )}

      <div className="text-center mt-5 mb-5">
        <button className="btn btn-danger" onClick={clearAll}>
          Vaciar Carrito
        </button>
      </div>*/}

      



{/*import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { UseCartContext }  from "../../context/CartContext";
import  ItemCart  from "../Cart/ItemCart";
import "../Cart/Cart.css";
import sadFace from "../img/sad.png";
import baseDeDatos from "../Productos/productos.json"



function Cart () { 
    const  { carrito, precioTotal, vaciarCarrito } = UseCartContext();
    
    
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
                        <img src={sadFace} alt="sad-face"></img>
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

*/}}