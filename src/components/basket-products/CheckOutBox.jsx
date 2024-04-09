import { useGetCartQuery } from "../../Redux/RTK-Query/Api/apiSlice";
function CheckOutBox() {
  const { data } = useGetCartQuery();

  return (
    <div className="flex flex-col bg-gray-300 rounded-md  p-1 shadow-xl    gap-2 mt-2 pb-4 sticky bottom-0 ">
      <h3 className="font-bold text-gray-700">
        <span className="font-bold text-teal-700 ">
          Total Items : {data?.numOfCartItems}{" "}
        </span>
      </h3>
      <h3 className="font-semibold text-gray-700">
        <span className="font-bold text-teal-700 ">
          Total Cash : {data?.data?.totalCartPrice}
          {" $ "}
        </span>
      </h3>
    </div>
  );
}

export default CheckOutBox;
