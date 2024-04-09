import furniture from "../../Data/data";

function ShopOnline() {
  return (
    <section className=" bg-white mb-10 body-font">
      <div className="container px-5 py-2 mx-auto flex flex-wrap">
        <div className="flex flex-wrap">
          {furniture.shop_online.map((item) => {
            return (
              <div key={item.id} className="p-px md:w-1/2 lg:w-1/4">
                <div className="flex flex-col rounded-lg h-full bg-opacity-60 p-8 ">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-transparent text-white flex-shrink-0">
                      <img src={item.img} className="w-8 h-8" alt="" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-bold">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base text-gray-700">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ShopOnline;
