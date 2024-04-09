import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function HeroAllPages({ mainTitle, subTitle }) {
  // to navigate to page you need >>> e.x navigate("/success")
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[70vh] bg-cover bg-center bg-no-repeat bg-[url('https://static.live.templately.com/woocommerce/2021/09/21bbcf2d-retailhut-home-banner-pattern.png')] relative after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#3a988df3] text-center flex flex-col gap-4 justify-center items-center ">
        <h1 className="z-30 text-6xl font-bold text-white"> {mainTitle} </h1>
        <p className="z-30 text-xl font-semibold text-white">
          {" "}
          <button onClick={() => navigate("/")}> Home </button> * {subTitle}{" "}
        </p>
      </div>
    </>
  );
}

export default HeroAllPages;
