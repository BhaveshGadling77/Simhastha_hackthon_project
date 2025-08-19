import React from "react";
import useFetch from "../UseFetch";
function Review(data) {
    // const [data, isPending, Error] = useFetch(url)
    // console.log(useFetch(url))
    console.log(Error)
   return(

        <>
            <p className="">
                {data.feedback}
            </p>
            <p>
                {data.username}
            </p>
            <p>
                {data.star}
            </p>
            <>
                {data.id}
            </>

        </>
    )
}

export default Review;