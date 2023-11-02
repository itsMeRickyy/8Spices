import AyamNasi from "../assets/MenuImages/AyamNasi";
import Card from "./card/Card";

function PopularDishes() {
  return (
    <div>
      <h1 className="text-3xl font-bold pb-10">Popular Dishes</h1>
      <div className="flex gap-5">
        <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
        <Card foodImage={<AyamNasi />} foodTitle="Ayam Goreng" rating={"9/10"} description="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      </div>
    </div>
  );
}

export default PopularDishes;
