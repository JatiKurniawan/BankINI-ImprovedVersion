import React from "react";
import Text36 from "../reuse/Text-36";
import ReviewCard from "./ReviewCard";

function Review() {
    return (
        <div className="bg-gold w-4/5 self-center mt-40 px-10 py-10 rounded-3xl flex flex-col gap-8">
            <Text36 color={ "white" } text={ "What Our Users Says" } />
            <div className="flex flex-row gap-8">
                <ReviewCard text={ "Good App" } user={ "Diki" } />
                <ReviewCard text={ "Good App" } user={ "Diki" } />
                <ReviewCard text={ "Good App" } user={ "Diki" } />
                <ReviewCard text={ "Good App" } user={ "Diki" } />
            </div>
        </div>
    )
}

export default Review;