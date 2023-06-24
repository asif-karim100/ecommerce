import Button from "react-bootstrap/Button";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cart } from "../CartContext";
import '../../App.css';


const Store = (props) => {
  const {productsArr, addToCart} = useContext(Cart);
 
  
  
  return (
    <>
    
    
    
    <div className="flex">
      {
      
      productsArr.map((item, index) => {
        return <div style={{width:'50%' }}>
          <div className="product-item">   
          <h3>{item.title}</h3>
          {/* <img src={item.imageUrl} width="50%"/> */}
          {/* <div className="hover-image"><img src={item.imageUrl} width="40%"  /></div> */}
          <Link to={`/product/${item.id}`}>
          <img src={item.imageUrl} alt={item.title} width="40%"  />
          </Link>
          <p>Price: ${item.price}</p>

          <Button className="button"
          onClick={() => addToCart(item)}
          >Add to Cart</Button>
          </div>
         </div>;
      })
      
      }
    </div>
    {/* <Button variant="success" onClick={() => props.handleShow(true)}>
        Cart
        <sup>{props.length}</sup>
      </Button> */}
    </>
  );
};
export default Store;