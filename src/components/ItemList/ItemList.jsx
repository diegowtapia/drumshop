import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemList = ({productoProp}) => { 
  console.log("productoProp", productoProp)
  const onAdd = (number) => {
    alert(`Se agregaron al carrito ${number} items`);
  };
  return(
    <div style={{background: "blue", color: "white", margin: 10, width: 200 ,heigh:500}}>
      
      <img src={productoProp.img} alt="img-producto" style={{width:"250px", height:"300px"}}/>
      <h2>{productoProp.name}</h2>
      <h3>Precio: {productoProp.price}</h3>
      <h4>Stock: {productoProp.stock}</h4>
      <Link to={`/items/${productoProp.id}`}>
        <button>Detalle</button>
      </Link>
      <ItemCount  stock={productoProp.stock} initial={0} onAdd={onAdd}/>
    </div>
  )
}



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
*/
//export default Item;
