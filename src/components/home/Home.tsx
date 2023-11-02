import RegularMenu from "../Menu/RegularMenu";
import PopularDishes from "../PopularDishes";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="font-poppins pb-52 bg-orange-50 px-10 sm:px-16 md:px-24 xl:px-72">
      <Navbar />
      <HeroSection />
      <PopularDishes />
      <RegularMenu />
    </div>
  );
}

export default Home;
