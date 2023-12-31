import React from "react";
import CardHead from "./CardHead";
import CardInput from "./CardInput";
import CardLink from "./CardLink";

function Card({ type }) {
    return (
        (type === "login") ? (
            <div className="flex flex-col w-full gap-10 items-center">
                <CardHead type={ type } />
                <CardInput type={ type } />
                <CardLink type={ type } />
            </div>
        ) : (
            <div className="flex flex-col w-fit gap-10 items-center">
                <CardHead type={ type } />
                <CardInput type={ type } />
                <CardLink type={ type } />
            </div>
        )
    )
} 

export default Card;