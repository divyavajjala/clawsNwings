import React from "react";
import logo from '../assets/logo-tr.png';
import { Link } from "react-router-dom";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import backgroundImage from "../../src/assets/bg-image.jpg"



function Header ({size}) {
    {/* <div style={{backgroundImage:`url(${backgroundImage})`, backgroundRepeat:"no-repeat",height: 530, width: 1400}}> */}
    return (
        <div className="navbar-container">
            <img className="logo" src={logo} alt="logo"></img>
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
                <li>
                    <div className="ellipse"></div>
                    {/* 
                    <span className="triangle one"></span>
                    <span className="triangle two"></span>
                    <span className="triangle three"></span>
                    <span className="triangle four"></span> */}
                </li>
                <li className="nav-item cart">
                    <Link to="shoppingcart"><AddShoppingCartIcon></AddShoppingCartIcon><span>{size}</span></Link>
                </li>
            </ul>
        </div>
    )
}
export default Header;