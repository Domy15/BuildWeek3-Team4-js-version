import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <ChevronRight style={{ ...style, display: "block", position: "absolute", top: "28%", right: "-3%" }} onClick={onClick} />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
      <ChevronLeft style={{ ...style, display: "block", position: "absolute", top: "28%", left: "-3%" }} onClick={onClick} />
  );
}

const Carousel = () => {
  const bntOption = [
    "Mi piace",
    "Geniale",
    "Suggerimenti Utili",
    "Molto Utile",
    "Interessante",
    "Ottimo consiglio",
    "Concordo",
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <Slider {...settings} className="my-3">
      {bntOption.map((btn, i) => (
        <div
          key={i}
          className="btnSectionComm btn bg-transparent border border-1 border-black rounded-5 text-center px-4 carouselComment"
        >
          {btn}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
