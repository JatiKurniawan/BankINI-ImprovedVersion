import React from "react";

function Text36({ color, text }) {
    return (
        (color === "white") ? (
            <p className="font-bub font-bold text-white text-4xl">{ text }</p>
        ) : (
            <p className="font-jof text-black text-2xl w-fit">{ text }</p>
        )
    )
}

export default Text36;