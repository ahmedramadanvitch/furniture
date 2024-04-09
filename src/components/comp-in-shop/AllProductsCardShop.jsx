import { Triangle } from "react-loader-spinner";
import { useGetAllProductsQuery } from "../../Redux/RTK-Query/Api/apiSlice";
import ProductBox from "../ProductBox/ProductBox";
import { useState } from "react";
// import { useSelector } from "react-redux";
function AllProductsCardShop() {
  // const search = useSelector((state) => state.search.search);
  let [searched, setSearched] = useState([]);
  // RTK QUERY API
  const { data, isError, error, isLoading } = useGetAllProductsQuery();

  if (isLoading) {
    return (
      <div className=" w-full flex justify-center items-center">
        <Triangle
          visible={true}
          height="80"
          width="80"
          color="#3a988df3"
          ariaLabel="triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-2xl text-red-700 my-5">
        {error?.data?.message}
      </p>
    );
  }

  // search
  function search(e) {
    let inputValue = e.target.value;
    setSearched(
      data?.data?.filter((item) =>
        item?.title
          .toLowerCase()
          .trim()
          .includes(inputValue.toLowerCase().trim())
      )
    );
  }

  return (
    <>
      <div className="container px-5 mx-auto relative -translate-y-6 flex justify-center items-center w-full">
        <input
          type="search"
          name="search"
          id=""
          onChange={search}
          className="p-3 rounded-2xl text-teal-800 font-semibold outline-none md:w-[40%] w-[85%] border border-gray-400 shadow-lg placeholder:text-teal-600 placeholder:font-semibold"
          placeholder="Search for product"
        />
      </div>
      <section className="text-gray-400 bg-white body-font">
        <div className=" px-3 pb-12 pt-4 mx-auto">
          <div className="flex flex-wrap px-10">
            {searched.length
              ? searched.map((item) => {
                  return (
                    <div
                      className="lg:w-1/4 md:w-1/2 p-4 mx-auto -ml-3"
                      key={item._id}
                    >
                      <ProductBox
                        id={item._id}
                        img={item.imageCover}
                        title={item.title}
                        category={item.category.name}
                        price={item.price}
                      />
                    </div>
                  );
                })
              : data?.data?.map((item) => {
                  return (
                    <div
                      className="lg:w-1/4 md:w-1/2 p-4 mx-auto -ml-3"
                      key={item._id}
                    >
                      <ProductBox
                        id={item._id}
                        img={item.imageCover}
                        title={item.title}
                        category={item.category.name}
                        price={item.price}
                      />
                    </div>
                  );
                })}
          </div>
        </div>
      </section>
    </>
  );
}

export default AllProductsCardShop;
