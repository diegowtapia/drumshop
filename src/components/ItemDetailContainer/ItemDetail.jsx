import { ItemCount } from "../ItemCount/ItemCount";
import { ShowCounter } from "../ItemCount/ShowCounter";
import { useCartContext } from "../../context/CartContext";
import { useState } from "react";

export const ItemDetail = ({productos}) => {
  const [count, setCount] = useState(0);
  const { addItem, show, handleShow } = useCartContext();

  const handleAdd = () => {
     setCount(count + 1);
   }

  const handleSub = () => {
     setCount(count - 1);
  }
  
 return (
    <>
      <hr />
      <div className="card mb-3 mw-card">
        <div className="row g-0">
          <div className="col-md-6">
            <img
              src={productos.img}
              className="img-fluid rounded-start"
              alt={productos.name}
            />
          </div>
          <div className="col-md-6">
            <div className="card-body">
              
              <h2 className="card-title text-uppercase">{productos.name}</h2>
              <p className="card-text">{productos.description}</p>

              <h3>$ {productos.price}</h3>
              <hr />
              <h5 className="mt-5">Stock Disponible: {productos.stock}</h5>
            </div>
          </div>
        </div>
      </div>

    <div className=" d-flex mt-2 mb-5 justify-content-center">
            <ItemCount
                    count={count}
                     sub={handleSub}
                     add={handleAdd}
                     show={handleShow}
                     condition={show}
                     stock={productos.stock}
           />
                 
    </div>  
                  
            <button className="btn btn-primary w-25 mb-5"
                    type="button"  onClick={()=> addItem(productos, count)}
                    disabled={show || count === 0}
                  >Agregar Producto
            </button>
            {show && <ShowCounter show={handleShow} count={count} />}
      
    </>
  );
};



{/*import React, { useState } from "react";
import Button from "@restart/ui/esm/Button";
import { Card, Col, Row } from "react-bootstrap";
import { UseCartContext }   from "../../context/CartContext";
import baseDeDatos from "../Productos/productos.json";
import { useFirebaseContext } from "../../context/FirebaseContext";
import { Counter } from "../ItemCount/Counter";
import  BtnItemDetail  from "../ItemDetailContainer/BtnItemDetail";


export const ItemDetail = ({ productos, idProducto }) => {
    
    const [cant, setCant] = useState(1);
    const [btn, setBtn] = useState(false);
    let { id, name, price, category, description, img, stock } = productos && idProducto ? productos : "";
    const { carrito, addToCart } = UseCartContext();    
    //const [ stockItem, setStockItem ] = useFirebaseContext();

   
    /*

    // setea el stock en base a lo que hay en el carrito
    let repetido = carrito.find((p) => p.id === id);
    if (repetido) {
        setStockItem(stock - repetido.cant);
    }
    
    

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
                                    //stockItem={stockItem}
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
                        
                        (btn || stockItem === 0 ) && <BtnItemDetail />
                        {(btn || baseDeDatos[id].stock === 0 ) && <BtnItemDetail />}
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );

}*/}