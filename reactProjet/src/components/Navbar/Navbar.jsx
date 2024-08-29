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
                    <li><Link to="/" className='link'>Home</Link></li>
                    <li><Link to="/category/Paragolpe" className='link'>Paragolpe</Link></li>
                    <li><Link to="/category/Optica" className='link'>Optica</Link></li>
                    <li><Link to="/category/Guardabarro" className='link'>Guardabarro</Link></li>
                    <li><Link to="/category/Faro" className='link'>Faro</Link></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar
