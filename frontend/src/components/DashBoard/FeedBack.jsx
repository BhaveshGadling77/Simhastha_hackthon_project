import React from "react";
import Rating from "@mui/material/Rating";
function FeedBack() {
    return (
        <div className="">
            <div className="flex flex-1 text-center align-middle justify-center">
                <div className="">
                    <p className="text-2xl"> Health Centers/RestRooms</p>
                </div>
            </div>
            <div className=" flex align-middle justify-center mb-5">
                            <Rating 
                             
                                precision={0.5}
                                icon={<span className="text-green-900" style={{ fontSize: "70px" }}>★</span>}
                                emptyIcon={<span className="text-gray-300" style={{ fontSize: "70px" }}>★</span>}
                                />
            </div>
             <div className="flex align-middle justify-center">
                   <textarea type="text" className="w-60 block rounded-md border border-black" placeholder="give some feedback..." ></textarea>
                    
                </div>
                <div className="flex align-middle justify-center mt-5">
                    <button type="submit" className="bg-green-950 text-white rounded-md px-6 py-3 ">Submit</button>
                </div>
        </div>
    );
}

export default FeedBack;
