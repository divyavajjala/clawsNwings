import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MenuIcon from '@mui/icons-material/Menu'; 
import logo from '../../src/assets/logo.svg';



function Header ({size}) {
    const toggleNavItems=()=> {
        var elementArray = document.getElementsByClassName("navbar-items");
        if (elementArray[0].className === 'navbar-items') {
            elementArray[0].classList.add('showNavItems');
        } else {
            elementArray[0].classList.remove('showNavItems');
        }
    }
    return (
        <div className="navbar-container">
            <img className="logo" src={logo} alt="logo"></img>
            <span className="hamburger-icon" onClick={toggleNavItems}><MenuIcon></MenuIcon></span>
            {/* <object data={logo} /> */}
            <ul className="navbar-items">
                <li className="nav-item">
                    <Link className= "nav-links" to="/">HOME</Link>
                </li>
                <li className="nav-item">
                    <Link className= "nav-links" to= "about">ABOUT</Link>
                </li>
                <li className="nav-item">
                    <Link className= "nav-links" to="menu">MENU</Link>
                </li>
                <li className="nav-item">
                    <Link className= "nav-links" to ="gallery">GALLERY</Link>
                </li>
                {/* <li className="nav-item">
                    <Link className= "nav-links" to ="contact">CONTACT US</Link>
                </li> */}
                <li className="nav-item">
                    <Link className= "nav-links" to="orderonline">ORDERONLINE</Link>
                </li>
                <li className="nav-item cart">
                    <Link className= "nav-links" to="cart"><AddShoppingCartIcon></AddShoppingCartIcon><span>{size}</span></Link>
                </li>
            </ul>
        </div>);
}
export default Header;