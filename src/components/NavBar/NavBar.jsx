import { useState } from "react";
import menuItems from "./menuItems.json"
import "./NavBar.css";
import logo from "../img/DS.png";
import { faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Carrito } from "./CartWidget";
import { Link, NavLink } from "react-router-dom"



export const NavBar = () => {
    return(
        <header className="NavBarItems">
            <section className="container d-flex justify-content-between align-items-center pt-3">
                
                    <Link to="/">
                        <img className="navBar-logo" src={logo} alt="logo" ></img>
                    </Link>
                    <div >
                        <Link to="/" className="nav-links">Home</Link>
                        <Link to="/category/accesorios/2"  className="nav-links">Accesorios</Link>
                        <Link to={`/category/drums/0`}  className="nav-links">Drums</Link>        
            
                    </div>
                    <div className="d-flex">   

                        <NavLink
                            activeStyle={{ color: "rgb(100,100,100)" }}
                            style={{color: "white"}}
                            to="/cart"
                            className="ms-2 position-relative"
                            title="Carrito"
                        >
                        <FontAwesomeIcon icon={faShoppingCart} />
                    
                        </NavLink>            
                
                    </div>
            </section>
        </header>
    )
}



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
