import React, { useState } from "react";
import menuItems from "./menuItems.json"
import "./NavBar.css";
import logo from "../img/DS.png";
import { Carrito } from "./CartWidget";


export const NavBar=() => {
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

export default NavBar;