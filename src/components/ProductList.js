import "../App.css";
import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import {Cart} from "./CartContext";
const ProductList = () => {
  const {productsArr, addToCart} = useContext(Cart);

  return (
    <div className="flex">
      {

         productsArr.map((item, index) => {
        return <div style={{width:'50%' }}>
          <div className="product-item">   
          <h3>{item.title}</h3>
          <img src={item.imageUrl} width="50%"/>
          <p>Price: ${item.price}</p>
          <Button className="button"
          onClick={() => addToCart(item)}
          >Add to Cart</Button>
          </div>
         </div>;
      })

      }
    </div>
  );
};

export default ProductList;