import React from "react";
function Section({data}) {
console.log(data.id)
    return (
        <div className="text-center flex-1 mt-5">
            <div className="font-bold">
                <p className="space-x-3 text-navBgC text-xl">{data.name}</p>
            </div>
            <div className="text-wrap mt-5">
                <p className="">
                    {data.job}
                </p>
            </div>
            <div className="text-wrap mt-5 ">
                <p>
                    {data.workDone}
                </p>
            </div>
        </div>
    )
}
export default Section;