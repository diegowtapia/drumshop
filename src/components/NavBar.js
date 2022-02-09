import React from "react";
import { Component } from "react";
import { MenuItems } from "./MenuItems";
import "./NavBar.css";
import logo from "/Users/diego/Desktop/FULL STACK/REACT JS/Proyecto React JS/drumshop/src/img/DS.png";
import { Carrito } from "./CartWidget";


class NavBar extends Component {
    state = { clicked: false}

    handleClick = () => { 
        this.setState({ clicked: !this.state.clicked })
    }

    render(){ 
        return(
            <nav className="NavBarItems">
                <h1>
                    <a href="index.html">
                        <img className="navBar-logo" src={logo} alt="logo"></img>
                     </a>
                </h1>
                <a><Carrito /></a>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                
                    {MenuItems.map((item, index)=> {
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
}

export default NavBar;