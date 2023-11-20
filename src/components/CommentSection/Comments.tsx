import CommentCard from "./CommentCard";

import {SwiperSlide} from "swiper/react";
// import Navigation from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import NavSwiperButton from "../button/SwiperButtton/NavSwiperButton";
import SwiperContainer from "../SwiperContainer/SwiperContainer";

function Comments() {
  return (
    <div>
      <SwiperContainer>
        <div className="flex justify-between  ">
          <h1 className="text-2xl sm:text-3xl font-bold">What Our Costumer Says?</h1>
          <NavSwiperButton />
        </div>
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
        <SwiperSlide>
          <CommentCard />
        </SwiperSlide>
      </SwiperContainer>
    </div>
  );
}

export default Comments;
