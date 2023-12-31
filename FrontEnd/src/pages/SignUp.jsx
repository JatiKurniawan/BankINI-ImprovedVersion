import React from "react";
import Card from "../component/log/Card";
import Navigation from "../component/Navigation";

function SignUp() {
    return (
        <div className="h-screen">
            <Navigation status={ "False" }/>
            <div className="flex flex-row h-full pt-20 px-52 justify-between">
                <Card type={ "signup" } />
                <img src="assets/signup.png" alt="" className="h-[444px]" />
            </div>
        </div>
    )
}

export default SignUp;