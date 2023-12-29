import React from "react";
import Text72 from "../reuse/Text-72";
import Text24 from "../reuse/Text-24";
import Button from "../reuse/48-16";

function Banner() {
    return (
        <div className="bg-home-banner bg-cover h-screen flex flex-col items-end justify-center mx-10 mt-6 rounded-large gap-6 px-20">
            <Text72 color={ "white" } text={ "Manage your Money Easily" }  />
            <Text24 text={ "Deposito, WIthdraw, and Save your Money in One Platform" } />
            <Button type={ "solid" } text={ "Get Started" } />
        </div>
    )
}

export default Banner;
