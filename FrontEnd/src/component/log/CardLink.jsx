import React from "react";
import Button from "../reuse/24-8";
import { Link } from 'react-router-dom';


function CardLink({ type }) {
    return (
        (type === "login") ? (
            <p className="font-jof font-semibold text-xl flex flex-col items-center">Belum punya Akun? <Link to={ "/signup" }><Button type={ "border" } text={ "SignUp" }/></Link></p>
        ) : (
            <p className="font-jof font-semibold text-xl flex flex-col items-center">Sudah punya Akun? <Link to={ "/login" }><Button type={ "border" } text={ "LogIn" }/></Link></p>
        )
    )
}

export default CardLink;