import furniture from "../../Data/data";

function InformationAboutUs() {
  return (
    <>
      <section className="text-gray-400 bg-white body-font my-5">
        <div className="container px-2 md:px-24 py-24 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
            <img
              alt="feature"
              className="object-cover object-center h-full w-full"
              src="https://static.live.templately.com/woocommerce/2021/10/65243193-rh-about-image-1.jpg"
            />
          </div>

          <div className="flex flex-col flex-wrap lg:gap-10 lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
            {furniture.about_Information.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col mb-10 p-5 sm:p-0 lg:items-start items-center"
                >
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row items-center gap-2">
                      <img
                        className="w-8 h-8 inline-flex items-center justify-center mb-5"
                        src={item.img}
                        alt=""
                      />

                      <h2 className="text-gray-800 text-xl title-font font-medium mb-3">
                        {item.title}
                      </h2>
                    </div>
                    <p className="leading-relaxed text-base text-gray-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default InformationAboutUs;
