import carrito from "../img/carrito.png";
import ItemCount from "../components/ItemCount"

export const Carrito = () => { 
    return(
        <div className="carrito">
            <img className="carrito" src={carrito} alt="carrito" />
            
        </div>
    )
}