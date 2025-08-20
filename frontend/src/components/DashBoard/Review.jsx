// import React from "react";
import useFetch from "../UseFetch";
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function Review({data}) {
    // const [data, isPending, Error] = useFetch(url)
    // console.log(useFetch(url))
    console.log(Error)
   return(

        <div className="flex w-56 mt-4">
            {/* <p className="">
                {data.feedback}
            </p>
            <p>
                {data.username}
            </p>
            <p>
            {/* <Rating name="half-rating" defaultValue={2.5} precision={0.5} /> */}
            {/* <Rating name="half-rating-read" defaultValue={data.star} precision={0.1} readOnly />
            </p>} */}
            <div className="flex w-96">
                <div className="flex justify-center align-middle">
                    <div className="align-middle justify-center flex">
                    <img src={data.avatar} alt="" className="rounded-full h-14 flex"/>
                </div>        
                    
                </div>
                <div className="inline-block">
                        <p className="inline-block ml-5">{data.username}</p>
                        <div className="ml-6">
                            <Rating name="half-rating-read" className="inline-block" defaultValue={data.star} precision={0.5} readOnly/>
                        </div> 
                    </div>
                </div>
            </div>
        
    )
}


export default Review;