import Comments from "../CommentSection/Comments";
import Footer from "../footer/Footer";
import RegularMenu from "../Menu/RegularMenu";
import PopularDishes from "../Menu/PopularDishes";
import Navbar from "../navbar/Navbar";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="font-poppins overflow-x-hidden bg-orange-50 px-5 sm:px-16 md:px-24 lg:px-20 xl:px-40 2xl:px-56">
      <Navbar />
      <HeroSection />
      <PopularDishes />
      <RegularMenu />
      <Comments />
      <Footer />
    </div>
  );
}

export default Home;
