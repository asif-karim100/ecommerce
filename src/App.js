import {useState, useContext} from "react";
import "./App.css";
import Header from "./components/LayOut/Header";
// import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { Cart } from "./components/CartContext";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Store from "./components/Pages/Store";
import ContactUs from "./components/Pages/ContactUs";



// import Cartpro from "./components/Cart/Cartpro";


const App = ()  => {
  const [showCart,setShowCart] = useState(false);

  const { cart, addToCart} = useContext(Cart);




const handleShow = (value) => {
  setShowCart(value)
};

// {
//   showCart ? 
//   <CartList/> :

// }
// {
//   showCart ? 
//   <CartList/> :
//   <ProductList addToCart={addToCart}/>

// }

//  <BrowserRouter>
// <Routes>
// <Route path="/home" element={<Home />} />
// <Route path="store" element={showCart ? <CartList /> : <Store />} />
// <Route path="about" element={<About />} />


// </Routes>

// </BrowserRouter>


  return (
    <div>
   
    
<Header count={cart.length} handleShow={handleShow}/>

      


 <Routes>
 <Route path="/home" element={<Home />} />
 <Route path="store" element={showCart ? <CartList /> : <Store />} />
 <Route path="about" element={<About />} />
 <Route path="contact" element={<ContactUs></ContactUs>}></Route>
 


 </Routes>

    

    </div>
  );
}

export default App;