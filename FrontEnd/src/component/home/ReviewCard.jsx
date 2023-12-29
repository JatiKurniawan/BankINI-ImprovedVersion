import React from "react";

function ReviewCard({ text, user }) {
    return (
        <div className="flex flex-col gap-0 px-10 py-12 bg-gray rounded-2xl">
            <p className="text-8xl font-bub font-bold">"</p>
            <div>
                <p className="font-jof text-4xl">{ text }</p>
                <p className="font-jof text-4xl">~ { user }</p>
            </div>
        </div>
    )
}

export default ReviewCard;