import React from "react";
import { useParams } from "react-router-dom";
import baseDeDatos from "../Productos/productos.json"

export default function ItemDetail(){
    
    const {id} = useParams()    

    return(
        <div>
            <div>                
                <div className="ItemContainerDetail">
                    <h1>{baseDeDatos[id].name}</h1>
                    <img src={baseDeDatos[id].img} alt={baseDeDatos[id].name}/>
                    <p>{baseDeDatos[id].description}</p>
                    <p>{baseDeDatos[id].descriptionExtra}</p>
                    <p className="ItemPriceDetail">$ {baseDeDatos[id].price}</p>
                </div>
            </div>
        </div>
    )
}