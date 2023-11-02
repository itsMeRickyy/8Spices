import NavButton from "../button/NavButton";

function Navbar() {
  return (
    <div>
      <div className="flex  h-[70px]    border-b justify-between">
        <div className="h-full flex gap-3 items-center">
          <img className="w-14 h-14" src="src/assets/8spicesBgPutih.png" alt="" />
        </div>
        <div className="hidden  sm:flex gap-5  h-full ">
          <NavButton>About Us</NavButton>
          <NavButton>Menu</NavButton>
          <NavButton>Reviews</NavButton>
          <NavButton>Franchise</NavButton>
          <NavButton>Contact</NavButton>
        </div>
        <div className="flex justify-center  sm:hidden ">
          <h1 className="text-5xl">...</h1>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
