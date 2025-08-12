import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Tagline from "./components/Tagline";
function Layout() {
  return (
    <>
      <Navbar />
      <Tagline/>
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
