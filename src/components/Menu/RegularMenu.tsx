import {SwiperSlide} from "swiper/react";
import "swiper/css";

// import {EffectCoverflow} from "swiper";

import Button from "../button/Button";
import Card from "../card/Card";
import NavSwiperButton from "../button/SwiperButtton/NavSwiperButton";
import SwiperContainer from "../SwiperContainer/SwiperContainer";

function RegularMenu() {
  const DataMenu = [
    {
      id: 1,
      category: "Ayam Negri",
      imageUrl: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/20210414151626__MG_9859.jpg",
      foodTitle: "Ayam Crispy",
      rating: "8/10",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 2,
      category: "Nasi Bakar",
      imageUrl: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/20210920140728__MG_5928.jpg",
      foodTitle: "Nasi Bakar",
      rating: "8/10",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      category: "Nasi Putih",
      imageUrl: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/NasBak-Ayam-SambalSetan-scaled.jpg",
      foodTitle: "Nasi Putih",
      rating: "7/10",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 4,
      category: "Nasi Putih",
      imageUrl: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/MG_0422-scaled.jpg",
      foodTitle: "Ayam Goreng",
      rating: "9/10",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      category: "Nasi Putih",
      imageUrl: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/MG_0422-scaled.jpg",
      foodTitle: "Ayam Goreng",
      rating: "9/10",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const category = ["Ayam Negri", "Nasi Bakar", "Nasi Putih", "Nasi Goreng", "Ala Carte", "Frozent"];

  console.log(DataMenu);

  return (
    <div className="py-10 flex flex-col gap-5">
      <div>
        <div className="flex flex-col">
          <div className="flex justify-between w-full ">
            <h1 className="text-2xl sm:text-3xl font-bold ">Our Regular Menu</h1>
          </div>
          <div className="flex justify-center">
            <div className="hidden sm:flex flex-wrap gap-1">
              {category.map(item => (
                <Button key={item}>{item}</Button>
              ))}
            </div>
          </div>
        </div>

        <SwiperContainer>
          <div className="flex justify-end">
            <NavSwiperButton />
          </div>
          {DataMenu.map(item => (
            <SwiperSlide key={item.id}>
              <Card
                key={item.id}
                imageUrl={item.imageUrl}
                foodTitle={item.foodTitle}
                // data
                rating={item.rating}
                description={item.description}
              />
            </SwiperSlide>
          ))}
        </SwiperContainer>
      </div>
    </div>
  );
}

export default RegularMenu;
