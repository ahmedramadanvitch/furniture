import { useGetCartQuery } from "../../Redux/RTK-Query/Api/apiSlice";
import ItemProductInBasket from "./ItemProductInBasket";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
function ProductBasketCart() {
  const { data: cart, isLoading } = useGetCartQuery();
  if (isLoading) {
    return <LoadingSpinner />;
  }
  return (
    <>
      {cart?.data?.products.length >= 1 ? (
        cart?.data?.products.map((item) => {
          return (
            <ItemProductInBasket
              key={item._id}
              id={item.product._id}
              img={item.product.imageCover}
              title={item.product.title.split(" ").slice(0, 2).join(" ")}
              price={item.price}
              category={item.product.category.name}
              quantity={item.count}
            />
          );
        })
      ) : (
        <h2 className="text-center text-gray-700 font-bold text-3xl mt-5">
          Your Cart Is Empty
        </h2>
      )}
    </>
  );
}

export default ProductBasketCart;
