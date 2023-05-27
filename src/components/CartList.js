import React, { useEffect, useState, useContext } from "react";
import { Cart } from "./CartContext";
import "../App.css";
const CartList = () => {
  const [CART, setCART] = useState([]);

  const { cart} = useContext(Cart);

  useEffect(() => {
    setCART(cart);
  }, [cart]);
  return (
    <>
    <div style={{float: "right"}}>
      {CART?.map((item, itemindex) => {
        return (
          <div>
            <img src={item.imageUrl} width={40} />
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
            <span>Price: ${item.price * item.quantity}</span>
          </div>
          );
        })}
        <p>
          $ <span></span>
          {CART.map((item) => item.price * item.quantity).reduce(
            (total, value) => total + value,
            0
          )}
        </p>
      </div>
      </>
    );
  };
  export default CartList;

