import React from "react";

function Footer() {
    return (
        <div className="bg-gold flex flex-row justify-between mt-40 px-12 py-2">
            <img src="assets/logo-white.png" alt="" className="h-16"/>
            <div className="flex flex-row gap-16 items-center">
                <p className="font-bub font-bold text-xl text-white">Privacy Policy</p>
                <p className="font-bub font-bold text-xl text-white">Cookies</p>
            </div>
        </div>
    )
}

export default Footer;