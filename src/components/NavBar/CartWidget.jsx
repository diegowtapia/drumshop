import carrito from "../img/carrito.png";
import React, { useContext } from 'react';
import { CartContext }  from "../../context/CartContext";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";


const Carrito = () => {
    
    const {cart} = useContext(CartContext)

    return(
        <>
            <div className='container'>
                {cart.lenght!==0 &&
                    <span style={{position: 'relative', top: '-5px', bottom: '5px', left: '30px', right: '0px', fontSize: '20px', backgroundColor: '#f4d975', borderRadius:'5px', padding: '5px', boxShadow: 'black',}}> 
                {cart.reduce((acum,item)=> acum+item.cantidad , 0)}</span>
                }
                <NavLink
                        activestyle={{ color: "rgb(100, 100, 100)" }}                           
                        to="/cart"
                        className="ms-2 position-relative"
                        title="Carrito"
                    >
                        <FontAwesomeIcon icon={faShoppingCart} />                  
                        
                </NavLink>   
            </div>           
            
        </>
    );
};
export default Carrito;

