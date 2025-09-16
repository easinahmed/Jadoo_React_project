import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="fixed w-full ">
    <div className="navbar py-12 container">
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
