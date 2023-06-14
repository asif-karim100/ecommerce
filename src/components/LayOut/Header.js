import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
// import "../App.css";
// import { ReactFragment} from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import {Cart} from "../CartContext";


const Header = (props) => {
  const {cart} =useContext(Cart);
  return (
    <React.Fragment>
    <div className="navBar">
      <Nav className="justify-content-center" activeKey="/home">
      <div style={{margin:'20px'}}><Link to="/home">HOME</Link></div>
      <div style={{margin:'20px'}}><Link to="/store">STORE</Link></div>
      <div style={{margin:'20px'}}><Link to="/about" onClick={() => props.handleShow(false)}>ABOUT</Link></div>
      <div style={{margin:'20px'}}><Link to="/contact">Contact Us</Link></div>
      
      </Nav>
    
 

</div>
    <div className="flex shopping-cart ">
      <h4>Shopping Cart</h4>
      <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{cart.length}</sup>
      </Button>
    </div>
    <div className="generic-section"><h1>The Generics</h1></div>
    </React.Fragment>
    
  );
};

export default Header;