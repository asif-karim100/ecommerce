import React,{useContext, useState} from "react";
import "./App.css";
import NavBar, {CartButton} from "./components/Cart/NavBar";
// import AvailableItem from "./components/AvailableItem";
// import Cart from "./components/Cart/Cart";
// import { productsArr} from "./components/Cart/CartItem";
import Header from "./components/Layout/Header";
import CartList from "./components/CartList";
import ProductList from "./components/ProductList";
import { Cart } from "./components/CartContext";


const App = (props) => {
  const [showCart, setShowCart] = useState(false);

  
  
  // const showcartHandler = () => {
  //   setshowcart(true);
  // };
  // const deleteHandler = () => {
  //   setshowcart(false);
  // };
  const {cart,addToCart} = useContext(Cart);

  const handleShow = (value) =>{
    setShowCart(value);
  };



  return (
    <div>
      <h2>Let's get started!</h2>
       <NavBar handleShow={handleShow} />
      <Header count={cart.length} handleShow={handleShow}/>

      {showCart ? <CartList/>: <ProductList addToCart={addToCart}/>}
      

    
    </div>
  );
}

export default App;