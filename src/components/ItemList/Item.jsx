import { Link } from 'react-router-dom';
export const Item = ({id, name, img, price}) => {

     return (
       <>
         <div className="col-lg-4 mb-3 d-flex align-items-stretch">
           <div className="card h-100">
             <img src={img} className="card-img-top" alt={name} />
             <div className="card-body">
               <h5 className="card-title text-uppercase">{name}</h5>
               <h2>$ {price}</h2>
             </div>
             <hr></hr>
             <div className="card-footer">
               <Link to={`/items/${id}`} className="btn bt-primary">
                 <button className="btn btn-primary">Comprar</button>
               </Link>
             </div>
           </div>
         </div>
       </>
     );
}

{/*
<Card style={{ width: "15rem" }} className="my-3 item__cart">
        <Link to={`/items/${listaProductos.id}`} title={listaProductos.producto}>
          <Card.Img
              variant="top"
              src={listaProductos.img}
              style={{ height: "9rem", objectFit: "contain" }}
          />
        </Link>
        <Card.Body className="d-flex flex-column justify-content-between align-items-center">
          <Link
            to={`/items/${listaProductos.id}`}
            style={{ color: "#212529", textDecoration: "none" }}
          >        
            <Card.Title className="text-center">{listaProductos.producto}</Card.Title>
          </Link>
          <Card.Text className="text-center">
            ${new Intl.NumberFormat().format(listaProductos.price)}
          </Card.Text>
          <div className="d-flex">
            <Link to={`/items/${listaProductos.id}`} className="btn btn-outline-primary me-2">
              Ver más
            </Link>
          </div>
        </Card.Body>    
      </Card>
      */}