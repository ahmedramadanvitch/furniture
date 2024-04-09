import furniture from "../../Data/data";

function Mentor() {
  return (
    <div className="flex px-3 flex-wrap justify-center items-center mt-5 sm:gap-3 md:gap-5 my-0 sm:my-10">
      {furniture.mentor_section_img.map((item) => {
        return (
          <img
            key={item.id}
            className="opacity-50 hover:opacity-100 transition-all duration-300"
            src={item.img}
          />
        );
      })}
    </div>
  );
}

export default Mentor;
