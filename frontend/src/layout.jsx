import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Tagline from "./components/Tagline";
import App from "./App";
function Layout() {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
