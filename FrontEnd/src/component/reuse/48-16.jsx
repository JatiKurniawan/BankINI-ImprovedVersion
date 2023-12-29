import React from "react";

function Button({ type, text }) {
    return (
        (type === "solid") ? (
            <p className="font-jof font-bold text-2xl text-white bg-gold w-fit rounded-xl px-12 py-4">{ text }</p>
        ) : (
            <p>{ text }</p>
        )
    )
}

export default Button;