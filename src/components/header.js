import React from "react";
import { Link } from "react-router-dom";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import logo from '../../src/assets/logo.svg';



function Header ({size}) {
    return (<div className="navbar-container">
            <img className="logo" src={logo} alt="logo"></img>
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
                    <Link to ="gallery">GALLERY</Link>
                </li>
                <li className="nav-item">
                    <Link to ="contact">CONTACT US</Link>
                </li>
                <li className="nav-item">
                    <Link to="orderonline">ORDERONLINE</Link>
                </li>
                <li className="nav-item cart">
                    <Link to="shoppingcart"><AddShoppingCartIcon></AddShoppingCartIcon><span>{size}</span></Link>
                </li>
            </ul>
        </div>);
}
export default Header;