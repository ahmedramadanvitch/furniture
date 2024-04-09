import Customers from "../components/comp-in-home/Customers";
import Gallery from "../components/comp-in-home/Gallery";
import Hero from "../components/comp-in-home/Hero";
import LatestNews from "../components/comp-in-home/LatestNews";
import Mentor from "../components/comp-in-home/Mentor";
import NewCollection from "../components/comp-in-home/NewCollection";
import ShopOnline from "../components/comp-in-home/ShopOnline";
import SignUp from "../components/comp-in-home/SignUp";

function Home() {
  return (
    <>
      <Hero />
      <Mentor />
      <Gallery />
      <NewCollection />
      <Customers />
      <ShopOnline />
      <LatestNews />
      <SignUp />
    </>
  );
}

export default Home;
