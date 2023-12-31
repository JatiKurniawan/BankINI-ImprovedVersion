import React from "react";

function CardHead({ type }) {
    return (
        (type === 'login') ? (
            <div className="w-full">
                <p className="font-bub font-bold text-5xl text-black">Welcome Back</p>
                <p className="font-jof font-bold text-xl text-black">Please LogIn to continue</p>
            </div>
        ) : (
            <div>
                <p className="font-bub font-bold text-5xl text-black">Welcome to BANK INI</p>
                <p className="font-jof font-bold text-xl text-black">SignUp and Start you Journey</p>
            </div>
        )
    )
}

export default CardHead;