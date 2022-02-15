import React, { useEffect, useState } from "react";
import { aparecerProductos } from '../mock/productos';
import ItemList from './ItemList';

/*class Mensaje extends Component{ 
    render() { 
        return(
            <div className="texto">
                <p>TEXTO PROVISIONAL</p>
            </div>
        )
    }
}*/


const ItemListContainer = ({ opening }) => {
    const [productos, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        aparecerProductos
            .then((res) => {
                setProducts(res);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <>
            {loading ? (
                <h1>Cargando Productos Increibles..</h1>
            ) : (
                <>
                    <h1>{opening}</h1>             
                    <ItemList productos={productos} />
                        
                </>
            )}
        </>
    );
};


export default ItemListContainer;