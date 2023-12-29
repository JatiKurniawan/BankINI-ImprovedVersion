import React from "react";
import LogoText from "../component/reuse/LogoText";
import Card from "../component/log/Card";

function LogIn() {
    return (
        <div>
            <div className="">
                <LogoText />
                <img src="assets/login.png" alt="" />
            </div>
            <Card type={ "login" } />
        </div>
    )
}

export default LogIn;