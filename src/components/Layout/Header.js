// import classes from './Header.module.css';
import Button from "react-bootstrap/Button";
// import "../App.css";
import Nav from "react-bootstrap/Nav";

export const NavBar = (props) => {
  return (
    <div className="navBar">
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#home">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#store" onClick={() => props.handleShow(false)}>
            STORE
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">ABOUT</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
};

const Header = (props) => {
  return (
    <div className="flex shopping-cart ">
      <h4>Shopping Cart</h4>
      <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{props.count}</sup>
      </Button>
    </div>
  );
};

export default Header;