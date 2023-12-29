import React from "react";

function Button({ type, text }) {
    return (
        (type === "solid" ) ? (
            <button className="font-jof font-semibold text-xl text-white flex bg-gold px-7 py-1 rounded-xl border-4 border-gold h-fit self-center">{ text }</button>
        ) : (
            <button className="font-jof font-semibold text-xl text-gold flex px-7 py-1 rounded-xl border-4 border-gold h-fit self-center">{ text }</button>
        )
    )
}

export default Button;

