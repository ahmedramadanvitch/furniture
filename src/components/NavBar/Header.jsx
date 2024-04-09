import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/logo--.png";
import "./header.css";
import { useContext, useState } from "react";
import furniture from "../../Data/data";
import { UserContext } from "../../Context/UserContext";

const Nav = () => {
  let { user, setIsUser } = useContext(UserContext);
  let navigate = useNavigate();
  // Logout
  function logOut() {
    setIsUser(null);
    navigate("/login");
    localStorage.removeItem("userToken");
  }
  let [open, setOpen] = useState(false);
  return (
    <div className="absolute z-50 w-[90vw]  sm:w-[75%] translate-x-[-50%] translate-y-[35%] left-[50%]">
      <div className="md:flex items-center justify-between rounded-3xl bg-blue-gray-50 py-4 md:px-10 px-7 shadow-md">
        <div
          className="font-bold text-2xl cursor-pointer flex items-center  font-[Poppins] 
      text-gray-800"
        >
          <span className="ml-3 text-xl">
            <Link to="/">
              <img src={logo} alt="" />{" "}
            </Link>
          </span>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-5 cursor-pointer lg:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {user ? (
          <ul
            className={`bg-white lg:bg-transparent rounded-b-3xl lg:flex lg:items-center lg:pb-0 absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pb-6 pl-7 transition-all duration-500 ease-in ${
              open ? "top-10" : "top-[-490px]"
            } `}
          >
            {furniture.Links_Footer_Header.map((link) => (
              <li key={link.name} className="lg:ml-7 text-lg lg:my-0 my-7">
                <NavLink
                  to={link.link}
                  className="w-full text-gray-800 font-semibold hover:text-gray-400 duration-300"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <NavLink
              to={"/login"}
              className=" lg:ml-7 bg-teal-400 p-2 rounded-lg hover:text-black text-white text-lg font-medium"
            >
              <span
                onClick={() => {
                  logOut();
                }}
              >
                Logout
              </span>
            </NavLink>
          </ul>
        ) : (
          <div
            className={`bg-white lg:bg-transparent rounded-b-3xl lg:flex lg:items-center lg:pb-0 absolute lg:static  lg:z-auto z-[-1] left-0 w-full lg:w-auto lg:pl-0 pb-6 pl-7 transition-all duration-500 ease-in ${
              open ? "top-20" : "top-[-70px]"
            } `}
          >
            <NavLink
              to="/login"
              className="w-full text-lg text-gray-800 font-semibold hover:text-gray-400 duration-300 mx-4"
            >
              Login
            </NavLink>
            <NavLink
              to="/register"
              className="w-full text-lg text-gray-800 font-semibold hover:text-gray-400 duration-300"
            >
              Register
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Nav;
