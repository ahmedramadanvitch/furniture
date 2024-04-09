import HeroAllPages from "../components/HeroAllPage/HeroAllPages";
import InformationAboutUs from "../components/comp-in-about/InformationAboutUs";
import SignUp from "../components/comp-in-home/SignUp";

function About() {
  return (
    <>
      <HeroAllPages mainTitle={"About Us"} subTitle={"About Us"} />
      <InformationAboutUs />
      <SignUp />
    </>
  );
}

export default About;
