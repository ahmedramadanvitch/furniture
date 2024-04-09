import furniture from "../../Data/data";
import MainHeading from "../MainHeading/MainHeading";

function Customers() {
  return (
    <section className="text-gray-400 bg-[#dfe8ef] body-font py-6 my-10">
      <MainHeading
        head_text="Praises From Customers"
        sub_text="We are acknowledged as one of the greatest retail stores around the world by our beloved customer base."
      />
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap justify-between ">
          {furniture.customers.map((item) => {
            return (
              <div
                key={item.id}
                className="lg:w-1/3 lg:mb-0 mb-6 p-5 bg-transparent rounded-xl"
              >
                <div className="h-full text-center">
                  <img
                    alt="testimonial"
                    className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 bg-gray-800 bg-opacity-10"
                    src={item.img}
                  />
                  <p className="leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-teal-700 my-4"></span>
                  <h2 className="text-teal-600 font-semibold mb-1 title-font tracking-wider text-lg ">
                    {item.name}
                  </h2>
                  <p className="text-gray-500 font-medium">{item.jop}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Customers;
