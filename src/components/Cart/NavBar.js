import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import classes from "./NavBar.module.css";

export const CartButton = (props) => {
  return (
    <div>
      <Button
        variant="dark"
       className={classes.button}
        style={{ float: "right" }}
        onClick={props.onClick}
      >
        My Cart
      </Button>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className={classes.navBar}>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#home">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#store">STORE</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#about">ABOUT</Nav.Link>
        </Nav.Item>
       </Nav>
    </div>
  );
};
export default NavBar;