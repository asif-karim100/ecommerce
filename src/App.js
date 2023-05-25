import React,{useState} from "react";
import NavBar, {CartButton} from "./components/Cart/NavBar";
import AvailableItem from "./components/AvailableItem";
import Cart from "./components/Cart/Cart";
import { productsArr} from "./components/Cart/CartItem";
import Header from "./components/Layout/Header";

const App = (props) => {
  const [showcart, setshowcart] = useState(false);

  
  
  const showcartHandler = () => {
    setshowcart(true);
  };
  const deleteHandler = () => {
    setshowcart(false);
  };



  return (
    <div>
      <h2>Let's get started!</h2>
       <NavBar />
      <Header />

      <CartButton onClick = {showcartHandler}/>
      <AvailableItem products={productsArr} />
      {showcart && <Cart onClick={deleteHandler} />}
    </div>
  );
}

export default App;