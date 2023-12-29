import React from "react";
import LogoText from "./reuse/LogoText";
import Button from "./reuse/32-12";
import Icon from "./reuse/Icon";
import { Link } from 'react-router-dom';

function Navigation({ status }) {
    return (
        <div className="flex flex-row justify-between mt-8 px-12">
            <LogoText />
            <div className="flex flex-row gap-6">
                <Link to="/login"><Button type={ "solid" } text={ "LogIn" }/></Link>
                <Link to="/signup"><Button type={ "stroke" } text={ "SignUp" }/></Link>
                <Icon address={"assets/icon-profile.png"} />
            </div>
        </div>
    )
}

export default Navigation;