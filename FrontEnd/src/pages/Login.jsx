import React from "react";
import Card from "../component/log/Card";
import Navigation from "../component/Navigation";

function LogIn() {
    return (
        <div className="h-screen">
            <Navigation status={ "False" }/>
            <div className="flex flex-row h-full pt-20 px-40 gap-8">
                <img src="assets/login.png" alt="" className="h-[444px]" />
                <Card type={ "login" } />
            </div>
        </div>
    )
}

export default LogIn;