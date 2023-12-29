import React from "react";

function CardHead({ type }) {
    return (
        (type === 'login') ? (
            <div>
                <p>Welcome Back</p>
                <p>Please LogIn to continue</p>
            </div>
        ) : (
            <div>
                <p>Welcome to BANK INI</p>
                <p>SignUp and Start you Journey</p>
            </div>
        )
    )
}

export default CardHead;