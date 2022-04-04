import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from 'react-router-dom';
import { collection, Timestamp, addDoc } from "firebase/firestore";
import { Card, Col, Row, Button } from "react-bootstrap";
import sadFace from "../img/sad.png";
import { db, updateStock } from "../../services/getFirebase";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
import { useState } from "react";
import InputForm from "../../helpers/formHelpers";


function FormCompra() { 
  const { cart, clear, removeItem, } = useContext(CartContext); 
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");

  function vaciarForm() {
    setNombre("");
    setApellido("");
    setEmail("");
    
  }
  const sendOrder = async (e) => {
    e.preventDefault();
    let order = {
        buyer: {
            name: e.target[0].value,
            phone: e.target[1].value,
            email: e.target[2].value,
        },
        prod: cart,
        total: cart.reduce((ac, prod) => (ac + (prod.price * prod.cantidad)), 0),
    };
    order.date = Timestamp.fromDate(new Date());
    const queryCollection = collection(db, "orders");
    console.log("order", order);
     
    try {
      const docRef = await addDoc(queryCollection, order);
      console.log(docRef.id)
      //Actualizar Stock
      cart.forEach((prod) => updateStock(prod.id, prod.cantidad))
      //Limpiar Carrito
      clear()
      //Limpiar formulario
      order.buyer.name = e.target.reset()
      order.buyer.phone = e.target.reset();
      order.buyer.email = e.target.reset();
      //Alerta pra mostrar nro. de orden de compra
      Swal.fire({
          title: "Ya estamos armando su pedido!",
          text: `Su compra se registro con código: ${docRef.id}`,
          icon: "success",
          confirmButtonText: "Aceptar",
      });


  } catch (error) {
      console.log("Error", error);
      Swal.fire(`Hubo un Error!`, "Inténtalo nuevamente", "error")
  }
};

return( 
  <section className="container">
    <section style={{ width: "70%", margin: "auto" }}>
        <h3 className="my-3 ">
          Complete el formulario para finalizar la compra
        </h3>

  <Form onSubmit={sendOrder}>
  <Row xs={1} md={2}>
    <InputForm
      state={nombre}
      setState={(e) => setNombre(e.target.value)}
      type="text"
      placeholder="Nombre"
    />
    <InputForm
      state={apellido}
      setState={(e) => setApellido(e.target.value)}
      type="text"
      placeholder="Apellido"
    />
    <InputForm
      state={email}
      setState={(e) => setEmail(e.target.value)}
      type="email"
      placeholder="Email"
    />    
  </Row>

  <div className="text-center">
                            <div className="text-center h4">
                                {`Productos agregados: ${cart.reduce(
                                    (ac, prod) => ac + prod.cantidad,
                                    0
                                )}`}
                            </div>
                            <div className="text-center h4 mt-3">
                                {`Valor Total de la compra: $ ${cart.reduce(
                                    (ac, prod) => ac + prod.price * prod.cantidad,
                                    0
                                )}`}
                            </div>          
                        </div>

  <Button className="btn btn-success me-2" type="submit">
    Enviar
  </Button>
  <Button onClick={vaciarForm} className="btn me-2">
    Reiniciar
  </Button>
  <Link to="/cart" className="btn btn-outline-danger me-2">
     Volver al Carrito
  </Link> 
</Form>
</section>
</section>

)
}

export default FormCompra;