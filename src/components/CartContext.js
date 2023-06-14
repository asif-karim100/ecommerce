import React, { createContext, useState } from 'react'
import {productsArr} from './CartItem';
// import CartList from './CartList';


 export const Cart = createContext();

const CartContext = ({children}) => {
    const [cart,setCart] = useState([]);


  const addToCart = (data) => {
    setCart([...cart, {...data, quantity : 1}])
};

const clearcart = (product) =>{
    setCart(cart.filter((item) =>item.id ===product.id))
}
// const clearcart =(data) =>{
//     setCart(cart.filter(productItem =>productItem.id !== data.id))

// }
// const handleremovepro =(data) => {
//     const productExist =cart.find((item)=>item.id ===data.id);
//     if(productExist.quantity ===1){
//          setCart(cart.filter((item) =>item.id !==data.id));

//     }else{
//           setCart(cart.map((item)=> item.id === data.id ? {...productExist,quantity:productExist.quantity -1}:item))
//     }

// }



  return (

    <Cart.Provider value={{cart,setCart,productsArr, addToCart,clearcart}}>
      {children}
      

      
    </Cart.Provider>
    
    
   

    
    
  )
}

export default CartContext;

