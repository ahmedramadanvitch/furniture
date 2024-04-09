import { useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { IoIosCloseCircle } from "react-icons/io";
import ProductBasketCart from "./ProductBasketCart";
import CheckOutBox from "./CheckOutBox";
import { useGetCartQuery } from "../../Redux/RTK-Query/Api/apiSlice";
function OffCanvasBasketCart() {
  const { data } = useGetCartQuery();

  // for close the Basket-cart when click on close X
  const [activeCart, setActiveCart] = useState(false);
  return (
    <>
      <div
        className={`fixed right-0 top-0  overflow-y-auto  bg-gray-100 w-full md:w-[45vw] lg:w-[35vw] h-full
        transition-all duration-500 z-[1000]  ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }
        `}
      >
        {/* title and close X */}
        <div className="sticky top-0 bg-gray-300 z-40 p-1 px-2 flex justify-between items-center mb-0 shadow-sm">
          <span className="text-2xl text-gray-700 font-bold pb-3 pt-2">
            My Order
          </span>
          <IoIosCloseCircle
            onClick={() => setActiveCart(!activeCart)}
            className="text-3xl text-red-500 hover:text-red-700 transition-all duration-300 cursor-pointer"
          />
        </div>

        {/* products carts */}
        <div className="min-h-screen px-2">
          <ProductBasketCart />
        </div>

        <CheckOutBox />
      </div>

      {/* basket bag icon */}
      <BsCart4
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-8 right-5 cursor-pointer rounded-xl bg-teal-700 text-white shadow-md text-5xl p-2 hover:text-teal-700 hover:bg-white transition-all duration-300 z-50
        ${data?.numOfCartItems > 0 && "animate-bounce delay-500"}`}
      />
      <span
        className={`fixed bottom-[7px] right-[5px] w-fit h-fit bg-teal-700   text-white flex justify-center items-center p-1  rounded-lg transition-all duration-300 z-50 ${
          data?.numOfCartItems > 0 ? "" : "opacity-0"
        } `}
      >
        {" "}
        {data?.numOfCartItems}
      </span>
    </>
  );
}

export default OffCanvasBasketCart;
