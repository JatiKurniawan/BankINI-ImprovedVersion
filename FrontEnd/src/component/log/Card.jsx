import React from "react";
import CardHead from "./CardHead";
import CardInput from "./CardInput";

function Card({ type }) {
    return (
        (type === "login") ? (
            <div>
                <CardHead type={ type } />
                <CardInput type={ type } />
                
            </div>
        ) : (
            <div>
                <CardHead type={ type } />
                <CardInput type={ type } />
            </div>
        )
    )
} 

export default Card;