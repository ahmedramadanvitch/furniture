import { useParams } from "react-router-dom";
import Section_container from "../../components/Section_container/Section_container";
import { BsFillBasketFill } from "react-icons/bs";
import {
  useAddProductToCartMutation,
  useProdcutDetailsQuery,
} from "../../Redux/RTK-Query/Api/apiSlice";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";

export default function ProductDetails() {
  let { id } = useParams();

  const {
    data,
    isLoading: detailsLoading,
    isError: detailsIsError,
    error: detailsError,
  } = useProdcutDetailsQuery(id);

  const [addProductToCart, { isLoading: addCartLoading }] =
    useAddProductToCartMutation();

  if (detailsLoading || addCartLoading) {
    return <LoadingSpinner />;
  }

  if (detailsIsError) {
    return <h2>{detailsError.message}</h2>;
  }

  return (
    <>
      <Section_container>
        <div className="flex flex-col justify-center items-center h-[85vh] mb-10 mt-24 gap-4 text-center py-3">
          <div className="h-[400px]">
            <img
              className="object-cover w-full h-full"
              src={data?.data?.imageCover}
              alt={data?.data?.title.split(" ").slice(0, 3).join(" ")}
            />
          </div>
          <p className="text-3xl text-cyan-800">
            {data?.data?.title?.split(" ").slice(0, 5).join(" ")}
          </p>

          <p className="text-xl text-blue-gray-500">
            {" "}
            Price : {data?.data?.price} ${" "}
          </p>
          <p className="text-xl text-blue-gray-500">
            {" "}
            price After Discount :{" "}
            {data?.data?.priceAfterDiscount ? (
              `${data?.data?.priceAfterDiscount} $`
            ) : (
              <span className="text-red-300">No</span>
            )}{" "}
          </p>
          <p className="text-xl text-blue-gray-300 text-center">
            {" "}
            {data?.data?.description.split(" ").slice(0, 7).join(" ")}{" "}
          </p>
          <button
            className="bg-cyan-700 w-1/3 my-2 mx-auto flex justify-center items-center p-3 rounded-lg text-2xl text-white"
            onClick={() => {
              addProductToCart(id);
              toast.success(
                `add one ${data?.data?.title.split(" ").slice(0, 3).join(" ")}`
              );
            }}
          >
            <BsFillBasketFill />
          </button>
        </div>
      </Section_container>
    </>
  );
}
