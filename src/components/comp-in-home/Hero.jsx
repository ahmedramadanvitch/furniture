import { useNavigate } from "react-router-dom";
import "./hero.css";
function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="hero-landing flex w-full h-screen ">
        <div className="left px-10 relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#3a988df3]">
          <div className="absolute flex flex-col gap-4  w-[85%] text-center  mx-auto z-10  top-1/2 -translate-y-1/2 sm:-translate-y-[40%]">
            <h1 className="sm:text-2xl md:text-5xl lg:text-6xl font-bold text-white">
              Best Quality Products For All Your Needs
            </h1>
            <p className="text-white text-lg">
              RetailHut is the perfect store to find everything you need for
              your home - your ultimate place of comfort and peace. We offer you
              the best home furnishing with well-designed and perfectly
              functional products to create a better everyday life for everyone.
            </p>
            <div className="flex w-full justify-center">
              <button
                onClick={() => navigate("/shop")}
                className="bg-gray-800/50 block my-3 hover:bg-teal-800 transition duration-300 text-lg font-semibold tracking-wider text-white px-3 py-2 rounded-lg"
              >
                {" "}
                Show Products{" "}
              </button>
            </div>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </>
  );
}

export default Hero;
