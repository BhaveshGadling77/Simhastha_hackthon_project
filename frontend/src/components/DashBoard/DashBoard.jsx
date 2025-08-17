import { CiHospital1 } from "react-icons/ci";
import { FaToilet } from "react-icons/fa";
function DashBoard() {
    const styleForHospital = { color: "#274020" };
    return (
        <div className="min-h-screen flex flex-col">
            <div className="mt-[20vh] w-90">
                <div className="text-center text-[#284121]">
                    <p className="text-4xl">Welcome [Username]</p>
                </div>
                <div className="flex flex-2 align-middle justify-center mt-20 flex-wrap">
                    <div className=" bg-[#f3e3b2] inline-block align-middle w-56 justify-center rounded-xl mt-6 mr-5 p-6">
                        <div className="align-middle justify-center text-center flex-1">
                            <div>
                                <div className="align-middle justify-center text-center flex mt-3">
                                    <CiHospital1
                                        size={100}
                                        style={styleForHospital}
                                    />
                                </div>

                                <div className="text-wrap text-green-900 font-bold text-center text-xl ">
                                    Health Centers / Hospitals
                                </div>
                                <div className="mt-5">
                                    <button className="bg-[#5a4634] w-58 rounded-lg mb-5 text-[#FDFDFD] p-2 cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-800 hover:text-[#f3e3b2]">
                                        Find Health Centers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" bg-[#f3e3b2] inline-block align-middle w-56 justify-center rounded-xl mt-6 mr-5 p-6">
                        <div className="align-middle text-center flex-1 justify-center">
                            <div>
                                <div className="align-middle justify-center text-center flex mt-3">
                                    <FaToilet
                                        size={100}
                                        style={styleForHospital}
                                    />
                                </div>
                                <div className="text-wrap text-green-900 font-bold text-center text-xl ">
                                    WashRooms / RestRooms
                                </div>
                                <div className="mt-5">
                                    <button className="bg-[#5a4634]  w-58 rounded-lg mb-5 text-[#FDFDFD] p-2  cursor-pointer transition-colors duration-300 ease-in-out hover:bg-green-800 hover:text-[#f3e3b2]">
                                        Find Restrooms
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default DashBoard;
