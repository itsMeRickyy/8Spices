import AyamNasi from "../../assets/MenuImages/AyamNasi";

function HeroSection() {
  return (
    <div className=" flex flex-col sm:flex-row flex-nowrap w-full py-10  items-center  gap-5">
      <div className="flex flex-col sm:gap-5 relative">
        <div className="-ml-10 hidden sm:block">
          <img className="w-24 h-24 opacity-50" src="./src/assets/dotted.png" alt="" />
        </div>
        <h1 className="text-3xl font-bold sm:text-4xl pb-5 sm:py-5">
          We Serve The Best <br /> You Love
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quas rem tenetur distinctio iste minus vero ad voluptatum culpa explicabo id nemo.</p>
        <div>
          <button className="px-5 py-3 sm:block  hidden bg-orange-300 rounded-full font-bold">Explore Food</button>
        </div>
      </div>
      <div className="flex flex-col items-end ">
        <div className="-mr-24">
          <img className="w-36 h-36" src="./src/assets/arrow.png" alt="" />
        </div>
        <div className="w-56 h-56 sm:w-72 sm:h-72  xl:w-96 xl:h-96 shadow-2xl bg-orange-300 rounded-full overflow-hidden flex items-center justify-center">
          <div className="w-48 sm:w-60 xl:w-80  bg-blue-400 rounded-full overflow-hidden">
            <AyamNasi />
          </div>
        </div>
      </div>
      {/* button */}
      <div>
        <button className="px-5 py-3 mt-5 sm:hidden bg-orange-300 rounded-full font-bold">Explore Food</button>
      </div>
    </div>
  );
}

export default HeroSection;
