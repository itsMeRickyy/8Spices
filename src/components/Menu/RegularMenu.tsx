import {useState} from "react";

import AyamBakar from "../../assets/MenuImages/AyamBakar";
import AyamNasi from "../../assets/MenuImages/AyamNasi";
import NasiBakar from "../../assets/MenuImages/NasiBakar";
import Button from "../button/Button";
import Card from "../card/Card";
import AyamGoreng from "../../assets/MenuImages/AyamGoreng";

function RegularMenu() {
  const DataMenu = [
    {
      id: 1,
      category: "Ayam Negri",
      data: [
        {
          foodImage: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/20210414151626__MG_9859.jpg",
          foodTitle: "Ayam Crispy",
          rating: "8/10",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      id: 2,
      category: "Nasi Bakar",
      data: [
        {
          foodImage: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/20210920140728__MG_5928.jpg",
          foodTitle: "Nasi Bakar",
          rating: "8/10",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      id: 3,
      category: "Nasi Putih",
      data: [
        {
          foodImage: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/NasBak-Ayam-SambalSetan-scaled.jpg",
          foodTitle: "Nasi Putih",
          rating: "7/10",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
        {
          foodImage: "https://jagoankuliner.co.id/wp-content/uploads/2023/03/MG_0422-scaled.jpg",
          foodTitle: "Nasi Putih",
          rating: "7/10",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        },
      ],
    },
    {
      id: 4,
      category: "Ala Carte",
      data: [{}],
    },
    {
      id: 5,
      category: "Frozen",
      data: [{}],
    },
    {
      id: 6,
      category: "Event",
      data: [{}],
    },
  ];

  console.log(DataMenu[0].data[0]);

  return (
    <div className="py-10 flex flex-col gap-5">
      <h1 className="text-3xl font-bold text-center">Our Regular Menu</h1>
      <div className="flex justify-center gap-5">
        <Button>Ayam Negri</Button>
        <Button>Nasi Bakar</Button>
        <Button>Nasi Putih</Button>
        <Button>Ala Carte</Button>
        <Button>Frozent</Button>
        <Button>Event</Button>
      </div>
      <div className="grid grid-cols-4">
        {DataMenu.map(item => (
          <Card
            key={item.id}
            // foodImage={item.data[0].foodImage}
            foodTitle={item.data[0].foodTitle}
            rating={item.data[0].rating}
            description={item.data[0].description}
          />
        ))}
      </div>
    </div>
  );
}

export default RegularMenu;
