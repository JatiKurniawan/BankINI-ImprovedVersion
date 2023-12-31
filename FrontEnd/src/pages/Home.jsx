import React from "react";
import Navigation from "../component/Navigation";
import Banner from "../component/home/Banner";
import Fitur from "../component/home/Fitur";
import Review from "../component/home/Review";
import Hooks from "../component/home/Hooks";
import Footer from "../component/home/Footer";

function Home() {
    return (
        <div className="flex flex-col">
            <Navigation status={ "False" }/>
            <Banner />
            <div className="flex flex-row gap-20 justify-center mt-10">
                <Fitur address={ "assets/icon-deposito.png" } textHeadline={ "Deposito" } textDetails={ "Add Money to Virtual Account" }/>
                <Fitur address={ "assets/icon-withdraw.png" } textHeadline={ "Withdraw" } textDetails={ "Retrieve your Money Easily" }/>
                <Fitur address={ "assets/icon-saving.png" } textHeadline={ "Saving" } textDetails={ "Keep safe some of your Saldo" }/>
            </div>
            <Review />
            <Hooks/>
            <Footer />
        </div>
    )
}

export default Home;