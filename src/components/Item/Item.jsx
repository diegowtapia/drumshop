import React from "react";
import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

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
                    <Link to={`/ItemDetail/${prod.id}`}>
                        <button className='BotonDetalles'>DETALLES</button>
                    </Link>
                    <Button variant="primary">Comprar</Button>
                    <ItemCount numberStock={prod.stock} initial={1} keyId={prod.id}/>
                
            </div>
          )}
      </div>
    );
};

//export default Item;
