import { Link } from "react-router";
import { useRef } from "react";




const Navbar = () => {
  
  const navbar =useRef(null);
 
  
   window.addEventListener("scroll", () => {
    const value = window.scrollY;
    if (value > 112){
      navbar.current.classList.add("bg-white","shadow-lg", "transition-all", "duration-500", "py-4");
      navbar.current.classList.remove("bg-transparent");
      navbar.current.classList.remove("py-12");
    } else{
      navbar.current.classList.remove("bg-white","shadow-lg");
      navbar.current.classList.add("bg-transparent");
      navbar.current.classList.add("py-12");
    }
    
   })
  return (
    <nav className="fixed w-full py-12 z-10" ref={navbar}>
    <div className="navbar  container">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="font-medium text-[17px] text-red-500" to={"/desitnations"}>Desitnations</Link>
            </li>
            <li>
              <Link className="font-medium text-[17px] text-heading" to={"/hotels"}>Hotels</Link>
            </li>
            <li>
              <Link className="font-medium text-[17px] text-heading" to={"/flights"}>Flights</Link>
            </li>
            <li>
              <Link className="font-medium text-[17px] text-heading" to={"/booking"}>Bookings</Link>
            </li>
            
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img src="Logo.svg" alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center  hidden  lg:flex">
        <ul className="menu menu-horizontal gap-[55px]  px-1">
          <li>
              <Link className="font-medium text-[17px] text-heading" to={"/desitnations"}>Desitnations</Link>
            </li>
            <li>
              <Link className="font-medium text-[17px] text-heading" to={"/hotels"}>Hotels</Link>
            </li>
            <li>
              <Link className="font-medium text-[17px] text-heading" to={"/flights"}>Flights</Link>
            </li>
            <li>
              <Link className="font-medium text-[17px] text-heading" to={"/booking"}>Bookings</Link>
            </li>
        </ul>
      </div>
      <div className="navbar-end ml-[60px] gap-[30px]">
        <Link to={"/login"} className="btn font-medium text-[17px] bg-transparent border-[1px] border-transparent hover:border hover:rounded-[5px] py-[9px] px-[21px] hover:border-black">Login</Link>
        <Link to={"/signup"} className="btn font-medium text-[17px] bg-transparent border-[1px] border-transparent hover:border hover:rounded-[5px] py-[9px] px-[21px] hover:border-black">Sign up</Link>
        <select defaultValue="Server location" className="bg-transparent cursor-pointer select select-neutral w-16 border-0">
        <option>EN</option>
        <option>BN</option>
        <option>AR</option>
      </select>
      </div>
    </div>
    </nav>
  );
};

export default Navbar;
