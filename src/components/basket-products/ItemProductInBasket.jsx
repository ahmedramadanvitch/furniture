/* eslint-disable react/prop-types */
import { FaPlusSquare } from "react-icons/fa";
import { FaSquareMinus } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import {
  useRemoveFromCartMutation,
  useUpdateCountMutation,
} from "../../Redux/RTK-Query/Api/apiSlice";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import toast from "react-hot-toast";
function ItemProductInBasket({ id, img, title, price, category, quantity }) {
  // remove from cart
  const [removeFromCart, { isLoading: removeLoading }] =
    useRemoveFromCartMutation();

  // update Count
  const [updateCount, { isLoading: updateLoading }] = useUpdateCountMutation();

  if (removeLoading || updateLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div
      key={id}
      className="flex gap-2 justify-start items-center border border-gray-400 rounded-md overflow-hidden my-2"
    >
      <img
        className="w-20 h-20 border border-gray-300 object-fill object-center"
        src={img}
        alt=""
      />
      {/* name and price */}
      <div className="flex flex-col gap-1">
        <p className="text-lg font-semibold text-teal-800">
          {title.split(" ")}
        </p>
        <span className="text-base font-medium text-blue-gray-700">
          {price} $
        </span>
        <span className="text-base font-medium text-teal-400">{category}</span>
      </div>
      {/* icons( + || - || delete ) */}
      <div className="flex flex-col justify-end items-end gap-2 absolute right-5">
        <MdDelete
          onClick={() => {
            if (window.confirm(`Are you sure to delete ${title} ?`)) {
              removeFromCart(id);
              toast.error(`deleted ${title}`);
            }
          }}
          className="text-red-700 text-xl cursor-pointer"
        />

        <div className="flex justify-center items-end gap-2">
          <FaSquareMinus
            onClick={() => {
              toast.error(`Removed one from ${title}`);
              quantity === 1
                ? removeFromCart(id)
                : updateCount({
                    id,
                    count: quantity > 0 ? quantity - 1 : quantity,
                  });
            }}
            className=" text-xl cursor-pointer text-gray-700 hover:text-teal-600"
          />
          <span className="text-base font-semibold">{quantity}</span>
          <FaPlusSquare
            onClick={() => {
              toast(`add one again from ${title} !`, {
                icon: "👏",
              });
              updateCount({ id, count: quantity + 1 });
            }}
            className=" text-xl cursor-pointer  text-gray-700 hover:text-teal-600 "
          />
        </div>
      </div>
    </div>
  );
}

export default ItemProductInBasket;
