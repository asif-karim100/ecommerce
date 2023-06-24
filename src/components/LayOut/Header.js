import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
// import "../App.css";
// import { ReactFragment} from "react";
// import Nav from "react-bootstrap/Nav";
import { Link} from "react-router-dom";
import {Cart} from "../CartContext";
import AuthContext from "../../store/AuthContext";
import classes from './Header.module.css'


const Header = (props) => {

  const {cart} =useContext(Cart);
  const authCtx = useContext(AuthContext);
  // const history = useNavigate();

  const isLoggedIn =authCtx.isLoggedIn;

  const logoutHandler =() =>{
    // alert("hey! Do You Want To Logout");
    // authCtx.logout();
    authCtx.logout();
    // history('/login')
  }

  return (
    <React.Fragment>
     <header className={classes.header}>
      <Link to='/'>
        <div className={classes.logo}>Ecommerce </div>
      </Link>
      <nav>
        <ul>
        <li><Link to="/home">Home</Link>
        </li>

        {isLoggedIn && ( 
            <li>
            <Link to='/store'onClick={() => props.handleShow(false)}>Store</Link>
          </li>
          )}
          {!isLoggedIn && ( 
            <li>
            
            <Link to='/login'onClick={() => props.handleShow(false)}>Store</Link>
            
          </li>
          )}

          <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">ContactUs</Link></li>

        {!isLoggedIn &&  (
        <li>
            <Link to='/login' >Login</Link>
          </li>
          )}
          
          
      
      

          
         {isLoggedIn && ( 
          <li>
          <Link to='/login'>
            <button onClick={logoutHandler}>Logout</button>
            </Link>
          </li>
          )}
         
        </ul>
      </nav>
    </header>

    {/* <div className="navBar">
      <Nav className="justify-content-center" activeKey="/">
      <li style={{margin:'20px'}}><Link to="/"></Link></li>

      <li style={{margin:'20px'}}><Link to="/home">HOME</Link></li>

      {!isLoggedIn && (
      <li style={{margin:'20px'}}><Link to="/store"   onClick={() => props.handleShow(false)}>STORE</Link></li>
      )}

      <li style={{margin:'20px'}}><Link to="/about">ABOUT</Link></li>

      <li style={{margin:'20px'}}><Link to="/contact">Contact Us</Link></li>


      {isLoggedIn &&( 
      <li style={{margin:'20px'}}><Link to="/login">Log in</Link></li>
      )}
      {/* {isLoggedIn && <div style={{margin:'20px'}}><Link to="/login" onClick={logoutHandler}>Logout</Link></div>} */}

      
      {/* </Nav> */} 
    
 

{/* // </div> */}
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