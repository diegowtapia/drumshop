import React, {useState, useEffect} from 'react';
import baseDeDatos from '../Productos/productos.json'
import Item from '../Item/Item';


//export default function ItemListContainer(){
const ItemListContainer = ({opening}) => { 
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const prodPromise = new Promise((resolve,reject)=>{
            setTimeout(() => {
                setProductos(baseDeDatos);
                setLoading(false);                
                resolve(true);                
            }, 2000);             
        })
            prodPromise.then(()=>{console.log("Carga Completada")})
            prodPromise.catch(()=>{console.log("ERROR 404")})
    }, []);    
    

        return(
            <>
                {loading ? (
                    <h1>Cargando Productos Increibles!!...</h1>
                    
                ) : (
                    <>
                        <h1>{opening}</h1>
                        <Item productos={productos}/>
                    </>
                )}
            </>
        )
}
export default ItemListContainer;

