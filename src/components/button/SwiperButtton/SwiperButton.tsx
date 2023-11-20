import ArrowRight from "../../../assets/ArrowRight";

interface NavigationButtonProps {
  rotate?: string;
  onClick: () => void;
}

function SwiperButton({rotate, onClick}: NavigationButtonProps) {
  return (
    <button onClick={onClick} className={`w-10 h-10 bg-orange-300 rounded-full flex items-center justify-center `}>
      <div className={`${rotate}`}>
        <ArrowRight />
      </div>
    </button>
  );
}

export default SwiperButton;
