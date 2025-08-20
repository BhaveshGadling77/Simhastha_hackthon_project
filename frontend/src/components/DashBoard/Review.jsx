// import React from "react";
import useFetch from "../UseFetch";
import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function Review({ data }) {
    // const [data, isPending, Error] = useFetch(url)
    // console.log(useFetch(url))
    console.log(Error);
    return (
        <div className="w-96 flex-1 mt-4">
            <div className="flex w-96">
                <div className="flex justify-center align-middle">
                    <div className="align-middle justify-center flex">
                        <img
                            src={data.avatar}
                            alt=""
                            className="rounded-full h-14 flex"
                        />
                    </div>
                </div>
                <div className="inline-block">
                    <p className="inline-block ml-5 font-bold text-xl">
                        {data.username}
                    </p>
                    <div className="ml-6">
                        <Rating
                            name="half-rating-read"
                            className="inline-block"
                            defaultValue={data.star}
                            precision={0.5}
                            readOnly
                        />
                    </div>
                </div>
            </div>
            <div className="flex">
                {data.feedback}
            </div>
        </div>
    );
}

export default Review;
