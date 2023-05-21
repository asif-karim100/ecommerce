import Button from "react-bootstrap/Button";
import React from "react";
import{CartitemList} from "./CartItem";


const Cart = (props) => {
  const cartList = CartitemList.map((cartitem) => (
    <ul>
    <li key={cartitem.id}>
      <h4>{cartitem.title}</h4>
      <img src={cartitem.imageUrl} />
      <p>Price:${cartitem.price}</p>
      <h6>Quantity:{cartitem.quantity}</h6>
    </li>
      <button style={{ float: "right" }}>Remove</button>
    </ul>
  ));
  return (
    <div style={{ float: "right" }}>
      <Button
        variant="outline-info"
        style={{ float: "right" }}
        onClick={props.onClick}
      >
        {/* ❌ */}
        Delete
      </Button>{" "}
      {cartList}
    </div>
  );
};

export default Cart;
