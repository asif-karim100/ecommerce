import AvailableItem from './components/AvailableItem';
import Cart from "./components/Cart/Cart";
import NavBar,{CartButton} from "./components/Cart/NavBar";
import React,{useState} from 'react';
import { productsArr} from "./components/Cart/CartItem";
import Header from './components/Layout/Header';
import "./App.css";
// import NavBar from './components/Cart/NavBar';

  
const App = (props) => {
  const [showcart, setshowcart] = useState(false);

  // {
    // title: "Black and white Colors",
  const showcartHandler = () => {
    setshowcart(true);
  };
  const deleteHandler = () => {
    setshowcart(false);
  };
  

 

// function App() {
  return (
    <>
        {/* <h1 >hello</h1> */}
        <NavBar></NavBar>
        <Header></Header>
        <CartButton onClick = {showcartHandler}/>
         <AvailableItem products={productsArr}/>
         {showcart && <Cart onClick={deleteHandler} />}
        
       
    </>
  );
};

export default App;
