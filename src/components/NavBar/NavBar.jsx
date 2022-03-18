import { useState } from "react";
import menuItems from "./menuItems.json"
import "./NavBar.css";
import logo from "../img/DS.png";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carrito } from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useFirebaseContext } from "../../context/FirebaseContext";
/*import  baseDeDatos  from "../Productos/productos.json";
const data = baseDeDatos;*/

function NavBar() {
    //const  productosEnCarrito  = useCartContext();    

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
                                <Link to={`/category/drums`}  className="me-2">Drums</Link>        
                            </li>
                        </ul>
                    </section>
                    <div className="d-flex">   

                        <NavLink
                            activestyle={{ color: "rgb(100, 100, 100)" }}                           
                            to="/cart"
                            className="ms-2 position-relative"
                            title="Carrito"
                        >
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                               {/* {productosEnCarrito()} */}
                            </span>
                    
                        </NavLink>            
                
                    </div>
            </section>
        </header>
    )
}

export default NavBar;


/*
<Carrito style={{marginLeft:15}}/>
export default function NavBar() {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => { 
        setClicked(!clicked)
    }

     
        return(
            <nav className="NavBarItems">
                <h1>
                    <a href="index.html">
                        <img className="navBar-logo" src={logo} alt="logo"></img>
                     </a>
                </h1>
                <a><Carrito /></a>
                <div className="menu-icon"  onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                
                    {menuItems.map((item, index)=> {
                        return(
                            <li key={index}>
                                
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>  
                                              
                            </li>
                              
                        )
                        
                    })}  
                                  
                </ul>

            </nav>
        )
    
}
*/
