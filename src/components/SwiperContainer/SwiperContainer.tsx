import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

interface SwiperContainerProps {
  ContentSwiper?: React.ReactNode;
  children?: React.ReactNode;
  key?: string;
}

function SwiperContainer({ContentSwiper, key, children}: SwiperContainerProps) {
  return (
    <Swiper
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 90,
          loop: true,
          //   centeredSlides: true,
        },
        320: {
          slidesPerView: 1,
          spaceBetween: 150,
          loop: true,
          //   centeredSlides: true,
          //   effect: "cards",
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 100,
          //   effect: "cards",
          initialSlide: 0,
          //   centeredSlides: true,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 170,
          //   effect: "cards",
          //   centeredSlides: true,
          initialSlide: 0,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 100,
          //   effect: "cards",
          //   centeredSlides: true,
          initialSlide: 1,
        },
        1024: {
          enabled: false,
          slidesPerView: 4,
          effect: "slide",
        },
      }}
      grabCursor={true}
      initialSlide={0}
      pagination={{
        dynamicBullets: true,
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={swiper => console.log(swiper)}
      className=" sm:px-0 flex  flex-col-reverse justify-center gap-2">
      {children}
      <SwiperSlide className="bg-red-400" key={key}>
        {ContentSwiper}
      </SwiperSlide>
    </Swiper>
  );
}

export default SwiperContainer;
