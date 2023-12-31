import React from "react";

function Button({ type, text }) {
    return (
        (type === "solid" ) ? (
            <button className="font-jof font-semibold text-md text-white flex bg-gold px-5 py-1 rounded-xl border-4 border-gold h-fit self-center">{ text }</button>
        ) : (
            <button className="font-jof font-semibold text-md text-gold flex px-5 py-1 rounded-xl border-4 border-gold h-fit self-center">{ text }</button>
        )
    )
}

export default Button;