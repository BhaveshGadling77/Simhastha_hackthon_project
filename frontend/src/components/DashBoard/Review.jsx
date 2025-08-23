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
        <div className="min-w-[300px] w-fit mt-4 bg-slate-50 pt-3 rounded-md shadow-lg">
            <div className="flex w-[600px]">
                <div className="flex justify-center align-middle pl-2">
                    <div className="align-middle justify-center flex">
                        <img
                            src={data.avatar}
                            alt=""
                            className="rounded-full h-14 flex"
                        />
                    </div>
                </div>
                <div className="inline-block">
                    <p className="inline-block ml-5 font-semibold text-3xl" >
                        {data.username}
                    </p>
                    <div className="ml-6 flex items-center gap-2 text-wrap">
                        <Rating 
                                defaultValue={data.star} 
                                precision={0.5}
                                icon={<span className="text-yellow-500" style={{ fontSize: "30px" }}>★</span>}
                                emptyIcon={<span className="text-gray-300" style={{ fontSize: "30px" }}>★</span>}
                                readOnly
                                />
                        <span className="inline-block text-[13px] text-gray-500">{data.month} months ago</span>
                    </div>
                </div>
            </div>
            <div className="flex ml-9 w-[550px] pb-3">
                <p className="ml-14">{data.feedback}</p>
            </div>
        </div>
    );
}

export default Review;
