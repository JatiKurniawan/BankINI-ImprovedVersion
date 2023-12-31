import React from "react";
import LogoText from "./reuse/LogoText";
import Button from "./reuse/32-12";
import Icon from "./reuse/Icon";
import { Link } from 'react-router-dom';

function Navigation({ status }) {
    return (
        (status === "False") ? (
            <div className="flex flex-row justify-between mt-8 px-12">
                <Link to='/'><LogoText /></Link>
                <div className="flex flex-row gap-6">
                    <Link to="/login"><Button type={ "solid" } text={ "LogIn" }/></Link>
                    <Link to="/signup"><Button type={ "border" } text={ "SignUp" }/></Link>
                    <Icon address={"assets/icon-profile.png"} />
                </div>
            </div>
        ) : (
            <div>
                <LogoText />
                <div>
                    <p></p>
                    <Icon address={"assets/icon-profile.png"} />
                </div>
            </div>
        )
    )
}

export default Navigation;