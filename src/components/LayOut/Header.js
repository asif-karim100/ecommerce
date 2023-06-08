import React from "react";
import Button from "react-bootstrap/Button";
// import "../App.css";
// import { ReactFragment} from "react";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";


const Header = (props) => {
  return (
    <React.Fragment>
    <div className="navBar">
      <Nav className="justify-content-center" activeKey="/home">
      <Link to="/home">HOME</Link>
      <span></span>
      <Link to="/store">STORE</Link>
      <Link to="/about">ABOUT</Link>
      </Nav>
    
 

</div>
    <div className="flex shopping-cart ">
      <h4>Shopping Cart</h4>
      <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{props.count}</sup>
      </Button>
    </div>
    </React.Fragment>
    
  );
};

export default Header;