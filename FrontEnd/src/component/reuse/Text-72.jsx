import React from "react";

function Text72({ color, text }) {
    return (
        (color === "white") ? (
            <p className="font-bub font-bold text-5xl text-white text-right w-2/5">{ text }</p>
        ) : (
            <p className="font-bub font-bold text-4xl text-black text-center w-2/5">{ text }</p>    
        )
    )
}

export default Text72;