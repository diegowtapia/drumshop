import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import  baseDeDatos  from "../Productos/productos.json"
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

const onAdd = (number) => {
    alert(`Se agregaron al carrito ${number} items`);
  };

export const ItemDetailContainer = () => {
    const [producto, setProducto] = useState()
    const {id} = useParams();
    const obtenerProductoBD = (nombreProducto) => {
        return new Promise((resolve, reject)=> {
            const arregloProductosBD = baseDeDatos;            
            const productoEncontrado = arregloProductosBD.find((elemento)=>elemento.id === nombreProducto);   
            setTimeout(() => { 
                resolve(productoEncontrado)
            }, 2000);
        })
    }

    useEffect(()=>{
        const obtenerProducto = async(id) => { 
            const responsePromise = await obtenerProductoBD(id);
            setProducto(responsePromise)
        }
        obtenerProducto(id);   
        
    },[id])

    console.log("parametro recibido", id)
    console.log("producto", producto)
    
    return(
        <div>

                <img src={baseDeDatos[id].img} alt="img"></img>,
                <h2>Producto {baseDeDatos[id].name}</h2>,
                <h3>Descripción: {baseDeDatos[id].description}</h3>,
                <h3>STOCK: {baseDeDatos[id].stock}</h3>,
                <h1> PRECIO:$ {baseDeDatos[id].price}</h1>,                
                <ItemCount  stock={baseDeDatos[id].stock} initial={0} onAdd={onAdd}/>
                <br/>
                <Link to={`/cart`}>
                    <button>Terminar mi compra</button>      
                </Link>
        </div>    
    )    
}


/*
export default function ItemDetail(){
    
    const {id} = useParams();    
    console.log("Parametro recibido")
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
}*/