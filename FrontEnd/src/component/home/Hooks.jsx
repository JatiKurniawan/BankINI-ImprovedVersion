import React from "react";
import Text72 from "../reuse/Text-72";
import Text36 from "../reuse/Text-36";
import Button from "../reuse/48-16";

function Hooks(){
    return (
        <div className="flex flex-col gap-20 mt-40">
            <div className="flex flex-col items-center gap-6">
                <Text72 color={ "black" } text={ "Have your Own Unlimited & Free E-Wallet on your Browser" } />
                <Text36 color={ "black" } text={ "SignUp and Start your Journey" } />
            </div>
            <div className="flex flex-col items-center">
                <Button type={ "solid" } text={ "Get Started ->" } />
            </div>
        </div>
    )
}

export default Hooks;