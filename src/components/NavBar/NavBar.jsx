import { useState } from "react";
import menuItems from "./menuItems.json"
import "./NavBar.css";
import logo from "../img/DS.png";
import { Carrito } from "./CartWidget";
import { Link } from "react-router-dom"



export const NavBar = () => {
    return(
        <div>
            <img className="navBar-logo" src={logo} alt="logo"></img>
            <Link style={{marginLeft:10}} to="/">Home</Link>
            <Link style={{marginLeft:10}} to="/category/accesorios/2">Accesorios</Link>
            <Link style={{marginLeft:10}} to={`/category/drums/0`}>Drums</Link>            
            <Carrito style={{marginLeft:15}}/>
        </div>
    )
}

/*
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
