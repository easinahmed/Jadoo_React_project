import { Link } from "react-router";
import { AiOutlineLogout } from "react-icons/ai";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useAuth } from "../hooks/useAuth"
import { FaKey, FaUser } from "react-icons/fa";


const Navbar = () => {
  const navbar = useRef(null);
  const { currentUser, logout, getUserInfo } = useAuth()
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setScrolled(value > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isLogin = !currentUser?.emailVerified
  const isGithubLogin = currentUser?.providerData[0]?.providerId === "github.com" || currentUser?.providerData[0]?.providerId === "facebook.com" ||
    currentUser?.isAnonymous

  return (
    <motion.nav
      className={`fixed w-full z-10 py-12`}
      ref={navbar}
      animate={{
        backgroundColor: scrolled ? "#ffffff" : "none",
        boxShadow: scrolled
          ? "0 10px 15px -3px rgba(0,0,0,0.1),0 4px 6px -4px rgba(0,0,0,0.1)"
          : "0 0px 0px rgba(0,0,0,0)",
        padding: scrolled ? "1rem 0" : "3rem 0",
      }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="navbar container flex justify-between items-center">
        <div className="navbar-start flex items-center">
          {/* Mobile Dropdown */}
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link
                  className="font-medium text-[17px] text-red-500"
                  to={"/desitnations"}
                >
                  Desitnations
                </Link>
              </li>
              <li>
                <Link className="font-medium text-[17px] text-heading" to={"/hotels"}>
                  Hotels
                </Link>
              </li>
              <li>
                <Link className="font-medium text-[17px] text-heading" to={"/flights"}>
                  Flights
                </Link>
              </li>
              <li>
                <Link className="font-medium text-[17px] text-heading" to={"/bookings"}>
                  Bookings
                </Link>
              </li>
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl">
            <img src="/Logo.svg" alt="Logo" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-[55px] px-1">
            {["desitnations", "hotels", "flights", "bookings"].map((item, idx) => (
              <li key={idx}>
                <Link className="font-medium text-[17px] text-heading" to={`/${item}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end ml-[60px] gap-[30px] flex items-center">

          {isGithubLogin ?
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} className=" m-1">
                  <div className="avatar ml-3">
                    <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                      <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                    </div>
                  </div>
                </div>
                <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                  <Link to={"/profile"} className="flex items-center gap-2 cursor-pointer" >
                    <button >
                      <FaUser className="text-red-500" />
                    </button>
                    <span>Profile</span>
                  </Link>
                  <div className="flex items-center gap-2 cursor-pointer" onClick={logout}>
                    <button >
                      <AiOutlineLogout className="text-red-500" />
                    </button>
                    <span>Logout</span>
                  </div>
                </div>
              </div>
            </> :
            <>
              {isLogin && <>

                <Link
                  to={"/auth/login"}
                  className="btn bg-transparent border-[1px] border-transparent hover:border hover:border-black"
                >
                  Login
                </Link>
                <Link
                  to={"/auth/signup"}
                  className="btn bg-transparent border-[1px] border-transparent hover:border hover:border-black"
                >
                  Sign up
                </Link>
                <select
                  defaultValue="Server location"
                  className="bg-transparent select select-neutral w-16 border-0"
                >
                  <option>EN</option>
                  <option>BN</option>
                </select>
              </>
              }

              {
                !isLogin && <div className="dropdown cursor-pointer dropdown-end">
                  <div tabIndex={0} className=" m-1">
                    <div className="avatar ml-3">
                      <div className="ring-primary ring-offset-base-100 w-8 rounded-full ring-2 ring-offset-2">
                        
                        {currentUser.photoURL ?
                          <img src={currentUser.photoURL} alt="avatar" />
                          :
                          <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        }
                        {/*  */}
                      </div>
                    </div>
                  </div>
                  <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-40 p-2 shadow-sm">
                    <Link to={"/profile"}  className="flex items-center gap-2 cursor-pointer" >
                      <button >
                        <FaUser className="text-red-500" />
                      </button>
                      <span>Profile</span>
                    </Link>
                    <div className="flex items-center gap-2 mt-2 cursor-pointer" onClick={logout}>
                      <button >
                        <AiOutlineLogout className="text-red-500" />
                      </button>
                      <span>Logout</span>
                    </div>

                    <Link to={"/password"} className="flex items-center gap-2 mt-2 cursor-pointer">
                      <button >
                        <FaKey className="text-red-500" />
                      </button>
                      <span>Change Password</span>
                    </Link>
                  </div>
                </div>
              }
            </>

          }

        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
