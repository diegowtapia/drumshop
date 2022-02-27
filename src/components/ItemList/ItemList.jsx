import { Card, Button } from "react-bootstrap";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";

export const ItemList = ({productoProp}) => { 
  console.log("productoProp", productoProp)
  {/*const onAdd = (number) => {
    alert(`Se agregaron al carrito ${number} items`);
  };*/}
  return(
    <Card style={{ width: "15rem" }} className="my-3 item__cart">
      <Link to={`/items/${productoProp.id}`} title={productoProp.name}>
        <Card.Img
            variant="top"
            src={productoProp.img}
            style={{ height: "9rem", objectFit: "contain" }}
        />
      </Link>
      <Card.Body className="d-flex flex-column justify-content-between align-items-center">
        <Link
          to={`/items/${productoProp.id}`}
          style={{ color: "#212529", textDecoration: "none" }}
        >        
          <Card.Title className="text-center">{productoProp.name}</Card.Title>
        </Link>
        <Card.Text className="text-center">
          ${new Intl.NumberFormat().format(productoProp.price)}
        </Card.Text>
        <div className="d-flex">
          <Link to={`/items/${productoProp.id}`} className="btn btn-outline-primary me-2">
            Ver más
          </Link>
        </div>
      </Card.Body>    
    </Card>
  );
}
      
      {/*<img src={productoProp.img} alt="img-producto" style={{width:"250px", height:"300px"}}/>
      <h2>{productoProp.name}</h2>
  <h3>Precio: {productoProp.price}</h3>     
      
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
*/
//export default Item;
