import { useGetAllProductsQuery } from "../../Redux/RTK-Query/Api/apiSlice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import MainHeading from "../MainHeading/MainHeading";
function NewCollection() {
  const { data, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <section className="text-gray-400  body-font">
      <MainHeading
        head_text="Hot New Collections"
        sub_text="Take a look at the latest home furnishing products that we have added to our collection recently."
      />
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-2">
          {data?.data.slice(32).map((item) => {
            return (
              <div key={item._id} className="p-2 lg:w-1/4 md:w-1/2 w-full">
                <div className="h-full flex items-center border-gray-200 shadow-sm border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-20 bg-gray-100  object-center flex-shrink-0 rounded mr-4"
                    src={item.imageCover}
                  />
                  <div className="flex-grow">
                    <h2 className="text-gray-600 title-font font-bold">
                      <a href="###">
                        {item.title.split(" ").slice(0, 3).join(" ")}
                      </a>
                    </h2>
                    <p className="text-teal-600 font-semibold flex items-center gap-1 my-1">
                      {item.updatedAt.split("").slice(0, 10)}
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

export default NewCollection;
