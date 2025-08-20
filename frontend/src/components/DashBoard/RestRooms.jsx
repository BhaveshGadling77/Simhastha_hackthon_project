import React, { useEffect, useState } from "react";
import { FaStarHalfAlt } from 'react-icons/fa';
import Review from "./Review";
import useFetch from "../UseFetch";
import axios from "axios";
function RestRooms() {
    // const [Review, setReview] = useState([])
    // console.log(data)
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/Review')
        .then((res) => {
            return res.json()
        })
        .then((data)=> {
            setData(data)
        })
    }, [])
    return (
        <div className="mt-28">
            <p>This is should be the restroom component.</p>
            {data.map((post) => <div key={post.id}>
                {/* <p>Name :- {post.username}</p>
                <p>Rating :- {post.star}</p>
                <p>Feedback :- {post.feedback}</p> */}
                <Review key={post.id} data={post}/>
            </div>)}
        </div>
    )
}
export default RestRooms;