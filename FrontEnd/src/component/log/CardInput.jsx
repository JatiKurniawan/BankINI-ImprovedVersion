import React from "react";
import Button from "../reuse/48-16";

function CardInput({ type }) {
    return (
        ( type === "login") ? (
            <div>
                <form action="">
                    <div>
                        <img src="assets/icon-ID.png" alt="" />
                        <input type="text" name="id" id="id" placeholder="Please Enter your ID Number"/>
                    </div>
                    <div>
                        <img src="assets/icon-pass.png" alt="" />
                        <input type="text" name="id" id="id" placeholder="Please Enter your Password"/>
                    </div>
                    <button><Button type={ "solid" } text={ "LogIn" } /></button>
                </form>
            </div>
        ) : (
            <div>
                <form action="">
                    <div>
                        <img src="assets/icon-ID.png" alt="" />
                        <input type="text" name="id" id="id" placeholder="Please Enter your Name"/>
                    </div>
                    <div>
                        <img src="assets/icon-pass.png" alt="" />
                        <input type="text" name="id" id="id" placeholder="Please Enter your Pin"/>
                    </div>
                    <div>
                        <img src="assets/icon-pass.png" alt="" />
                        <input type="text" name="id" id="id" placeholder="Please Enter your Password"/>
                    </div>
                    <button><Button type={ "solid" } text={ "SignUp" } /></button>
                </form>
            </div>
        )

    )
}

export default CardInput;