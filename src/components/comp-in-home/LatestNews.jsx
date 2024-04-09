import { useGetAllProductsQuery } from "../../Redux/RTK-Query/Api/apiSlice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MainHeading from "../MainHeading/MainHeading";

function LatestNews() {
  const { data, isLoading } = useGetAllProductsQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className=" bg-white body-font">
      <MainHeading
        head_text="Latest News & Updates"
        sub_text="Learn about all the latest updates & news about us, interior decorations, home & office furnishings, and so much more.."
      />
      <div className="container px-5 py-4 mx-auto">
        <div className="flex flex-wrap justify-center">
          {data?.data?.slice(22, 25).map((item) => {
            return (
              <div key={item._id} className="p-4 lg:w-1/3 md:w-1/2">
                <div className="h-full flex flex-col items-center text-center">
                  <a href="###">
                    <img
                      alt="team"
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                      src={item.imageCover}
                    />
                  </a>
                  <div className="w-full">
                    <p className="w-3/4 mx-auto title-font font-semibold text-lg  text-teal-600">
                      {item.title.split(" ").slice(0, 3).join(" ")}
                    </p>

                    <p className="text-gray-400 my-3 flex justify-center items-center gap-2">
                      {item.category.name}
                    </p>
                    <p className="text-gray-600 my-3 flex justify-center items-center gap-2">
                      {item.ratingsAverage}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-800"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>
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

export default LatestNews;
