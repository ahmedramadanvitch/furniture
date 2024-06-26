import { Link } from "react-router-dom";
import furniture from "../../Data/data";
import logo from "../../assets/logo--.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function Footer() {
  return (
    <>
      <footer className=" text-gray-400 bg-[#dfe8ef]  body-font">
        <div className="container px-5 py-10 mx-auto flex md:items-start lg:items-start md:flex-row md:flex-wrap flex-wrap flex-col">
          <div className="md:w-[35%] flex-shrink-0 md:mx-auto mx-auto text-center md:text-left">
            <a
              href="###"
              className="flex items-center md:justify-start justify-center text-white"
            >
              <img src={logo} alt="" />
            </a>
            <p className="mt-4 text-base text-gray-500 ">
              Our goal is to create insightful and content that you can put to
              work in personal and professional life.
            </p>
            <ProtectedRoute>
              <div className="my-4 py-4 flex justify-center md:justify-start items-center gap-3">
                <a
                  href="###"
                  className="text-white bg-teal-700 hover:text-teal-700 hover:bg-gray-400 rounded-lg transition-all duration-300"
                >
                  <FaFacebookF className="w-[40px] h-[40px]  p-[10px]   text-center" />
                </a>
                <a
                  href="###"
                  className="text-white bg-teal-700 hover:text-teal-700 hover:bg-gray-400 rounded-lg transition-all duration-300"
                >
                  <FaInstagram className="w-[40px] h-[40px]  p-[10px]   text-center" />
                </a>
                <a
                  href="###"
                  className="text-white bg-teal-700 hover:text-teal-700 hover:bg-gray-400 rounded-lg transition-all duration-300"
                >
                  <FaTwitter className="w-[40px] h-[40px]  p-[10px] text-center" />
                </a>
                <a
                  href="###"
                  className="text-white bg-teal-700 hover:text-teal-700 hover:bg-gray-400 rounded-lg transition-all duration-300"
                >
                  <FaLinkedinIn className="w-[40px] h-[40px]  p-[10px] text-center" />
                </a>
              </div>
            </ProtectedRoute>
          </div>

          <div className="flex-grow flex flex-wrap md:pl-2 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/2 md:w-1/2 w-full px-4 md:px-14 text-lg">
              <h2 className="title-font text-2xl font-bold text-gray-800 tracking-widest mb-3">
                Quick Link
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-1">
                {furniture.Links_Footer_Header.map((link) => {
                  return (
                    <li key={link.name}>
                      <Link
                        to={link.link}
                        className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </nav>
            </div>

            <div className="lg:w-1/2 md:w-1/2 w-full px-4 md:px-14 text-lg">
              <h2 className="title-font text-2xl font-bold text-gray-800 tracking-widest  mb-3">
                Information
              </h2>
              <nav className="list-none mb-10 flex flex-col gap-1">
                {furniture.Footer_Information.map((info, index) => {
                  return (
                    <li key={index}>
                      <p className="text-gray-600 font-semibold hover:text-teal-700 transition-all duration-300">
                        <span className="text-teal-700 font-bold">
                          {info.name}
                        </span>{" "}
                        {info.information}
                      </p>
                    </li>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>

        {/* <div className="bg-[#dfe8ef] bg-opacity-75">
          <div className="container mx-auto py-5 px-5">
            <p className="text-gray-900 text-lg text-center font-semibold tracking-widest">
              Created By Ahmed Ramadan
            </p>
          </div>
        </div> */}
      </footer>
    </>
  );
}

export default Footer;
