import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    
      <main>
        <Navbar />
        <Outlet />
        
      </main>
    
  );
}

export default AuthLayout