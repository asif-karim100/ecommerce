import React from "react";


const AvailableItem = ({products}) => {

  return <div>
      {products.map(product => (
        <div key={product.title}>
           <h3>{product.title}</h3>    
           <img src={product.imageUrl} alt="no " className=""></img>
           <p> Price: {product.price}</p>
        </div>
      ))}
  </div>;
};

export default AvailableItem;