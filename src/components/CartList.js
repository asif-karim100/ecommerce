import React, { useEffect,useState, useContext } from "react";
import { Cart } from "./CartContext";
import "../App.css";
import { Card } from "react-bootstrap";
import classes from "./CartList.module.css";
// import CartContext from "./CartContext";




const CartList = (item) => {
  const [CART, setCART] = useState([]);

  const {cart,clearcart} = useContext(Cart);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
 
  
 

 
  return (
    <Card  className={classes["cart"]}>
    <div style={{float:"right"}}>
      {CART?.map((item, itemindex) => {
        return (
          <div key={item.id}>
             
            <img src={item.imageUrl} alt="im" className={classes["image"]} />
            <span>{item.title}</span>
            <button 
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity - 1 : 0,
                      }
                    : item;
                });
                setCART(_CART);
              }}
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button 
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? { ...item, quantity: item.quantity + 1 }
                    : item;
                });
                setCART(_CART);
              }}
            >
              +
            </button>
            <span> Price: ${item.price * item.quantity}

            </span>
            

          </div>
       
        );
      })}
      <p>
        <span className={classes["total"]}>Total: $</span>
        {CART.map((item) => item.price * item.quantity).reduce(
          (total, value) => total + value,
          0
        )}
      </p>
  
      <button className={classes["clear"]} onClick={clearcart}>Clear Cart</button>


   
      
      



      
     



      

     
     

    </div>
    </Card>
  );
};

export default CartList;

// <button className={classes["clear"]} onClick={clearcart}>Hide Cart</button>









