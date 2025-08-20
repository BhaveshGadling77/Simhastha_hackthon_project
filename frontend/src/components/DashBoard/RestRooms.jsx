import React, { useEffect, useState } from "react";
import { FaStarHalfAlt } from 'react-icons/fa';
import Review from "./Review";
import useFetch from "../UseFetch";
import axios from "axios";
function RestRooms() {
    const [Review, setReview] = useState(null)
    // console.log(data)
    useEffect(() => {
        axios.get("http://localhost:3000/Review")
        .then((res)=> {
            res = res.json()
            console.log(res.data)
            return res
        })
    }, [onload])
    return (
        <div className="mt-28">
            <p>This is should be the restroom component.</p>
        
        </div>
    )
}
export default RestRooms;