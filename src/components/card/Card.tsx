interface cardProps {
  foodImage?: JSX.Element;
  imageUrl?: string;
  foodTitle: string;
  rating: string;
  description: string;
}

function Card({foodImage, foodTitle, rating, description, imageUrl}: cardProps) {
  return (
    <div className="bg-white shadow-xl p-5  ml-10 sm:ml-0 w-56 flex flex-col items-center justify-center gap-2 rounded-xl">
      <div className="w-40 h-40 rounded-full bg-yellow-300 overflow-hidden">
        {foodImage}
        <img src={imageUrl} alt="" />
      </div>
      <h1 className="font-bold text-xl">{foodTitle}</h1>
      <p>{rating}</p>
      <p className="text-sm text-center">{description}</p>
    </div>
  );
}

export default Card;
