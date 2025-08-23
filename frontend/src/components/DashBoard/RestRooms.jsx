import React, { useEffect, useState } from "react";
import { FaStarHalfAlt } from 'react-icons/fa';
import Review from "./Review";
import useFetch from "../UseFetch";
import axios from "axios";
import FeedBack from "./FeedBack";
function RestRooms() {
    //fetching data from the useFetch Hook.
    const { data, isPending, Error } = useFetch('http://localhost:3000/Review')
    console.log(Error)
    return (
        <div className="mt-28">
            <div className="flex flex-1 justify-center mt-3 mb-4">
                    <iframe src="https://www.google.com/maps/d/u/1/embed?mid=1J6tAKws46-gpxm4B-QeDjs7fziGc-7A&ehbc=2E312F&noprof=1" width="600" height="480"></iframe>

                    </div>
            <FeedBack/>
            {isPending && (
                <>
                Loading....     
                </>
            )}
                
            {Error && <>
                Failed to Fetch the Data. 
                </>}
            { !Error && !isPending && data.map((post) => <div className="inline-block mr-3">
                <Review key={post.id} data={post}/>
            </div>
        )}
        
        </div>
    )
}
export default RestRooms;