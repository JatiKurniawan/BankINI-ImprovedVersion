import React from "react";
import Text36 from "../reuse/Text-36";
import Text20 from "../reuse/Text-20";

function Fitur({ address, textHeadline, textDetails }) {
    return (
        <div className="bg-gold w-72 h-96 flex flex-col justify-between px-10 py-14 rounded-3xl">
            <img src={ address } alt="" className="h-32 w-fit"/>
            <div>
                <Text36 color={ "white" } text={ textHeadline } />
                <Text20 text={ textDetails } />
            </div>
        </div>
    )
}

export default Fitur;