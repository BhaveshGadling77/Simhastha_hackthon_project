import { CiHospital1 } from "react-icons/ci";
import { FaToilet } from "react-icons/fa";
function DashBoard() {

    const styleForHospital = { color:"#274020"}
  return (
    <div className="min-h-screen flex flex-col ">
      <div className="mt-[20vh] w-90">
        <div className="text-center text-[#284121]">
          <p className="text-4xl">Welcome [Username]</p>
        </div>
        <div className="flex flex-2 align-middle justify-center space-x-2 mt-20">
          <div className=" bg-[#f3e3b2] inline-block align-middle w-56 justify-center rounded-xl">
            <div className="align-middle justify-center text-center flex-1">
                <div className="align-middle justify-center text-center flex">
                    <CiHospital1 size={100} style={styleForHospital}/>
                </div>
                
                <div>
                    Health Centers
                </div>
            </div>
          </div>
          <div className=" bg-[#f3e3b2] inline-block align-middle w-56 justify-center rounded-xl">
            <div className="align-middle text-center flex-1 justify-center">
                <div className="align-middle justify-center text-center flex">
                    <FaToilet size={100} style={styleForHospital}/>
                </div>
                <div className="text-wrap">
                    WashRooms/RestRooms
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default DashBoard;
