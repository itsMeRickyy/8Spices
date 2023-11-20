import {SwiperSlide} from "swiper/react";
import "swiper/css";

import AyamNasi from "../../assets/MenuImages/AyamNasi";
import Card from "../card/Card";
import NavSwiperButton from "../button/SwiperButtton/NavSwiperButton";
import SwiperContainer from "../SwiperContainer/SwiperContainer";

function PopularDishes() {
  return (
    <div>
      <SwiperContainer>
        <div className="flex justify-between  ">
          <h1 className="text-2xl sm:text-3xl font-bold pb-10">Popular Dishes</h1>
          <NavSwiperButton />
        </div>
        <SwiperSlide>
          <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </SwiperSlide>
        <SwiperSlide>
          <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </SwiperSlide>
        <SwiperSlide>
          <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </SwiperSlide>
        <SwiperSlide>
          <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        </SwiperSlide>
      </SwiperContainer>
    </div>
  );
}

export default PopularDishes;
