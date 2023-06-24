import React from "react";
import { Button } from "react-bootstrap";
import './Availableitem.module.css';



const AvailableItem = ({products})=>{

    return(
        <div>
        {products.map(item =>(
            <div
            key={item.id}
            title={item.title} style={{
                marginRight:"10px",
                padding:"10px",
                float:'right'
            }}>
            <h3>{item.title}</h3>
            <img src = {item.imageUrl} alt='in'></img>
            <p>price:{item.price}</p>
            <Button>Add to Cart</Button>
            
            
            </div>
            
        ))}
        
        
        
        </div>
    )

}

export default AvailableItem;
    