import React, { useEffect, useState } from "react";
import { FaStarHalfAlt } from 'react-icons/fa';
import Review from "./Review";
import useFetch from "../UseFetch";
import axios from "axios";
function RestRooms() {
    //fetching data from the useFetch Hook.
    const { data, isPending, Error } = useFetch('http://localhost:3000/Review')
    console.log(Error)
    return (
        <div className="mt-28">
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