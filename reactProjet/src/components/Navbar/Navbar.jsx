import React from 'react'
import "./Navbar.css";
import logo from "../../assets/img/LogoVioleta.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'> 
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li>  <Link></Link>  </li>
                    <li><a className="link" href="#">Servicio</a></li>
                    <li><a className="link" href="#">Productos</a></li>
                    <li><a className="link" href="#">Contacto</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar
