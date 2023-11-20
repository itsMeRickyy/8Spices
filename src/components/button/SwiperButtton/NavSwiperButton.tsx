import SwiperButton from "./SwiperButton";
import {useSwiper} from "swiper/react";

function NavSwiperButton() {
  const swiper = useSwiper();

  return (
    <div className="flex gap-3">
      <SwiperButton onClick={() => swiper.slidePrev()} rotate="rotate-180" />
      <SwiperButton onClick={() => swiper.slideNext()} />
    </div>
  );
}

export default NavSwiperButton;
