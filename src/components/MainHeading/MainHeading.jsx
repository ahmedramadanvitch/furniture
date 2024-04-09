/* eslint-disable react/prop-types */
function MainHeading({ head_text, sub_text }) {
  return (
    <div className="my-10">
      <h1 className="text-center text-5xl md:text-6xl font-bold w-[80%] md:w-[50%] mb-3 mx-auto text-gray-800">
        {head_text}
      </h1>
      <p className="text-center text-base font-semibold w-[70%] md:w-[40%]  mx-auto leading-tight text-gray-400">
        {" "}
        {sub_text}{" "}
      </p>
    </div>
  );
}

export default MainHeading;
