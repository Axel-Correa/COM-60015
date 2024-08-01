import React from 'react'
import "./Navbar.css";
import logo from "../../assets/img/LogoVioleta.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#">Servicio</a></li>
                    <li><a href="#">Productos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </nav>
            <CartWitdget/>
        </div>
    )
}

export default Navbar
