import React, { createContext, useState } from 'react'
import {productsArr} from './CartItem';
// import CartList from './CartList';


 export const Cart = createContext();

const CartContext = ({children}) => {
    const [cart,setCart] = useState([]);
    const [warning,setWarning] =useState(false);


  const addToCart = (data) => {
    //////if item is already present then prentitem not addtocart
    let isPresent = false;
    cart.forEach((product)=>{
      if(data.id === product.id)
      isPresent = true;
    })
    if(isPresent){
      setWarning(true);
     
      return;
    }
    setCart([...cart, {...data, quantity : 1}])
};





  return (

    <Cart.Provider value={{cart,setCart,productsArr, addToCart}}>
      {children}
      

      
    </Cart.Provider>
    
    
   

    
    
  )
}

export default CartContext;

