import React, { useContext } from "react";
import "./NavBar.css";
import logo from "../img/DS.png";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { useFirebaseContext } from "../../context/FirebaseContext";
import Carrito from "./CartWidget";

function NavBar() {
     

    return(
        <header>
            <section className="container d-flex justify-content-between align-items-center pt-3">
                
                    <Link to="/">
                        <img  style={{height: 70}} src={logo} alt="logo" ></img>
                    </Link>
                    <section className="container py-2">
                        <ul className="d-flex justify-content-center">
                            <li>
                                <Link to="/" className="me-2">Home</Link>
                                <Link to= {`/category/accesorios`}  className="me-2">Accesorios</Link>
                                <Link to={`/category/drums`}  className="me-2">Bodies</Link>        
                            </li>
                        </ul>
                    </section>
                    
                     
                    <Link className="nav-link" to='/Cart'>
                         <Carrito />
                    </Link>     
                
                    
                    
            </section>
        </header>
    )
}

export default NavBar;

