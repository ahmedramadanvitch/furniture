import HeroAllPages from "../components/HeroAllPage/HeroAllPages";
import AllProductsCard from "../components/comp-in-shop/AllProductsCardShop";
import SignUp from "../components/comp-in-home/SignUp";

function Shop() {
  return (
    <>
      {" "}
      <HeroAllPages mainTitle={"Shop"} subTitle={"Shop"} />
      <AllProductsCard />
      <SignUp />
    </>
  );
}

export default Shop;
