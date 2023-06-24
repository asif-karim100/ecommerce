import React, { useEffect,useState, useContext } from "react";
import { Cart } from "./CartContext";
import "../App.css";
import { Card } from "react-bootstrap";
import classes from "./CartList.module.css";
import { useNavigate } from "react-router-dom";
// import CartContext from "./CartContext";





const CartList = ({item}) => {
  const [CART, setCART] = useState([]);

  const {cart,setCart} = useContext(Cart);

  const deleteitem = (id) =>{
    
    const newlist= cart.filter((item) =>item.id !== id);
    setCart(newlist)
          
  } 
  const clearcart = (data) =>{
    
    const newlist= cart.filter((item) =>item.id === data);
    setCart(newlist)
          
  } 
  

  useEffect(() => {
    setCART(cart);
  }, [cart]);
 
  
  const histo = useNavigate() ;
  const back = () => {
    // alert("jhy")
      histo('/home');
  }
 
  return (
    <>
    <Card  className={classes["cart"]}>
    <div style={{float:"right"}}>
      {CART.map((item, itemindex) => {
        return (
          
          <div id={item.id}>
             
            <img src={item.imageUrl} alt="im" className={classes["image"]} />
            <span>{item.title}</span>
            <button 
              onClick={() => {
                const _CART = CART.map((item, index) => {
                  return itemindex === index
                    ? {
                        ...item,
                        quantity: item.quantity > 0 ? item.quantity  -1 : 0,
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
            <button onClick={() => deleteitem(item.id)}>deletebutton</button>

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
    <section>
      <button  onClick={() => back()}>Back to Home</button>

      </section>
      </>
  );
};

export default CartList;



////////////////////////////////////////////////
//////////////








