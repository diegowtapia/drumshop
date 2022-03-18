import React,{useContext, useEffect, useState} from "react";
import { Card, Button } from "react-bootstrap";
import Items from "./Item";
import ItemCount from "../ItemCount/ItemCount";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import "../Cart/Cart.css";


import { Item } from '../ItemList/Item';

export const ItemList = ({productos}) => {


  return (
      <>
         
          {productos.map((producto) => (<Item {...producto} key={producto.id}/>) )}
         
        </>
  
  )
}

{/*
  console.log("producto", producto)
  const onAdd = (number) => {
    alert(`Se agregaron al carrito ${number} items`);
  };
  return(
    <Card style={{ width: "15rem" }} className="my-3 item__cart">
      <Link to={`/items/${id}`} title={producto}>
        <Card.Img
            variant="top"
            src={img}
            style={{ height: "9rem", objectFit: "contain" }}
        />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Link
          to={`/items/${id}`}
          style={{ color: "#212529", textDecoration: "none" }}
        >        
          <Card.Title className="text-center">{producto}</Card.Title>
        </Link>
        <Card.Text className="text-center">
          ${new Intl.NumberFormat().format(price)}
        </Card.Text>
        <div className="d-flex">
          <Link to={`/items/${id}`} className="btn btn-outline-primary me-2">
            Ver más
          </Link>
        </div>
      </Card.Body>    
    </Card>
  );
}
      
      <img src={productoProp.img} alt="img-producto" style={{width:"250px", height:"300px"}}/>
      <h2>{productoProp.name}</h2>
  <h3>Precio: {productoProp.price}</h3>  */}   
      
      {/*<ItemCount  stock={productoProp.stock} initial={0} onAdd={onAdd}/>
    </div>
  )
}*/}



/*

export default function Item({ productos }) {
//const Item = ({ img, name, stock, price, id, description }) => {    
    return (
      <div className="container">    
            {productos.map((prod)=>             
                    <div className='itemContainer-prod' key={prod.id}>
                    <img src={prod.img} alt={prod.name}/>
                    <p className="ItemTitle">{prod.name}</p>
                    <p className="Item">{prod.description}</p>
                    <p className='ItemPrice'>$ {prod.price}</p>
                    <p className="Stock">Stock: {prod.stock}</p>
                    <Link to={`/ItemDetail/${prod.id}`}>
                        <button className='BotonDetalles'>DETALLES</button>
                    </Link>
                    <Button variant="primary">Comprar</Button>
                    {/*<ItemCount />}
                
            </div>
          )}
      </div>
    );
};

//export default Item;*/
