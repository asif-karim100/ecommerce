import {useState} from "react";
import "./App.css";
import Header from "./components/LayOut/Header";
import CartList from "./components/CartList";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Store from "./components/Pages/Store";
import ContactUs from "./components/Pages/ContactUs";
import ProductDetails from "./components/Pages/productDetails";
import LogIn from "./components/Pages/Login";

// import Cartpro from "./components/Cart/Cartpro";


const App = ()  => {
  const [showCart,setShowCart] = useState(false);

  // const { cart, addToCart} = useContext(Cart);




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
   
    
<Header  handleShow={handleShow}/>

      


 <Routes>
 <Route path="/home" element={<Home />} />
 <Route path="store" element={showCart ? <CartList /> : <Store />} />
 <Route path="about" element={<About />} />
 <Route path="contact" element={<ContactUs></ContactUs>}></Route>
 +  <Route path="login" element={<LogIn/>}/>
 <Route path="/product/:id" element={<ProductDetails/>} /> 


 </Routes>

    

    </div>
  );
}

export default App;