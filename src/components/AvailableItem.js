import React from "react";
import { Button } from "react-bootstrap";
import './Availableitem.module.css';



const AvailableItem = ({products})=>{

    return(
        <div>
        {products.map(product =>(
            <div key={product.title} style={{
                marginRight:"10px",
                padding:"10px",
                float:'right'
            }}>
            <h3>{product.title}</h3>
            <img src = {product.imageUrl}></img>
            <p>price:{product.price}</p>
            <Button>Add to Cart</Button>
            
            
            </div>
            
        ))}
        
        
        
        </div>
    )

}

export default AvailableItem;
    