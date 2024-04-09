/* eslint-disable react/prop-types */
import { BsFillBasketFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useAddProductToCartMutation } from "../../Redux/RTK-Query/Api/apiSlice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
function ProductBox({ id, img, title, price, category }) {
  const [addProductToCart, { isLoading, isError, error }] =
    useAddProductToCartMutation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (isError) {
    return (
      <p className="text-center text-2xl text-red-700 my-5">
        {error?.data?.message}
      </p>
    );
  }

  return (
    <>
      <div className="cart w-full mx-2 border border-gray-400 rounded-xl overflow-hidden">
        <div className="w-full">
          <Link to={`/productDetails/${id}`}>
            <img src={img} alt="image" className="w-full object-cover" />
          </Link>
        </div>
        <div className="relative flex flex-col items-center gap-3 text-center bg-[#f5f7fd] py-3 ">
          {/* Add To Cart */}
          <button
            onClick={() => {
              addProductToCart(id);
              toast.success(
                `add one ${title.split(" ").slice(0, 3).join(" ")}`
              );
            }}
            className="basket-icon bg-[#0d9489c9] -translate-y-[60px] text-2xl opacity-1 w-full flex justify-center items-center text-white p-3 absolute z-10 transition-all duration-100 shadow-lg active:shadow-none active:text-xl"
          >
            <BsFillBasketFill />
          </button>

          <p className="text-xl relative  text-gray-800 font-semibold">
            {title.split(" ").slice(0, 3).join(" ")}
          </p>
          <p>{category}</p>
          <span className="text-teal-600 text-xl font-semibold">${price}</span>
        </div>
      </div>
    </>
  );
}

export default ProductBox;
