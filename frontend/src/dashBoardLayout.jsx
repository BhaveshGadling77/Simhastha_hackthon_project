import { Outlet } from "react-router";
import DashBoard from "./components/DashBoard/DashBoard";

function DashBoardLayout() {
    return (
        <div className="min-h-screen flex flex-col">
            <Outlet/>    
        </div>
    )
}
export default DashBoardLayout;