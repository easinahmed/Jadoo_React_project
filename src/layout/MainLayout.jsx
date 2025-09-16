import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    
  );
}

export default MainLayout