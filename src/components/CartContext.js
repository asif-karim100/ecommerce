import React, { createContext, useState } from 'react'
import {productsArr} from './Cart/CartItem';

 export const Cart = createContext();

const CartContext = ({children}) => {
    const [cart,setCart] = useState([]);


  const addToCart = (data) => {
    setCart([...cart, {...data, quantity : 1}])
};

  return (
    <Cart.Provider value={{cart,setCart,productsArr, addToCart}}>
      {children}
    </Cart.Provider>
  )
}

export default CartContext;