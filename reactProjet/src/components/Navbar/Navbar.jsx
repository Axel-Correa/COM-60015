import React from 'react'
import "./Navbar.css";
import logo from "../../assets/img/LogoVioleta.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='nav'> 
            <img src={logo} alt="" />
            <nav>
                <ul>
                    <li><NavLink to="/" className='link'activeClassName = "active" >Home</NavLink></li>
                    <li><NavLink to="/category/Paragolpe" className='link'activeClassName = "active" >Paragolpe</NavLink></li>
                    <li><NavLink to="/category/Optica" className='link'activeClassName = "active" >Optica</NavLink></li>
                    <li><NavLink to="/category/Guardabarro" className='link'activeClassName = "active" >Guardabarro</NavLink></li>
                    <li><NavLink to="/category/Faro" className='link'activeClassName = "active" >Faro</NavLink></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar
