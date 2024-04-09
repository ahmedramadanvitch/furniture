import furniture from "../../Data/data";
import MainHeading from "../MainHeading/MainHeading";

function Gallery() {
  return (
    <section className="text-gray-400 body-font">
      <MainHeading
        head_text="Products Gallery"
        sub_text="You find stunning products for each inch of your beautiful home matching your taste of style exactly."
      />
      <div className="px-3 pb-16 pt-5 mx-auto flex flex-wrap">
        {furniture.gallery.map((item) => {
          return (
            <div key={item.id} className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="md:p-px p-px w-1/2">
                  <img
                    alt="gallery"
                    className="relative z-20 w-full object-cover h-full object-center block  hover:grayscale transition-all duration-500"
                    src={item.img1}
                  />
                </div>
                <div className="md:p-px p-px w-1/2">
                  <img
                    alt="gallery"
                    className="relative z-20 w-full object-cover h-full object-center block hover:grayscale transition-all duration-500"
                    src={item.img2}
                  />
                </div>
                <div className="md:p-px p-px w-full">
                  <img
                    alt="gallery"
                    className="relative z-20 w-full h-full object-cover object-center block hover:grayscale transition-all duration-500"
                    src={item.img3}
                  />
                </div>
              </div>
              <div className="flex flex-wrap w-full md:w-1/2">
                <div className="md:p-px p-px w-full">
                  <img
                    alt="gallery"
                    className="relative z-20 w-full h-full object-cover object-center block hover:grayscale transition-all duration-500"
                    src={item.img4}
                  />
                </div>
                <div className="md:p-px p-px w-1/2">
                  <img
                    alt="gallery"
                    className="relative z-20 w-full object-cover h-full object-center block hover:grayscale transition-all duration-500"
                    src={item.img5}
                  />
                </div>
                <div className="md:p-px p-px w-1/2">
                  <img
                    alt="gallery"
                    className="relative z-20 w-full object-cover h-full object-center block hover:grayscale transition-all duration-500"
                    src={item.img6}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Gallery;
