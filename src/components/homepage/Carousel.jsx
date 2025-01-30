import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
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

const Carousel = ({id}) => {
  const dispatch = useDispatch();
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

  const postComment = async (btn) => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/", {
        method: "POST",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhNDQ5ZmU4NWJhZDAwMTUyOWIzYmYiLCJpYXQiOjE3MzgxNjMzNTksImV4cCI6MTczOTM3Mjk1OX0.S9qk4G5SYOLIs4g-EIbipTCE-zz2V6sAdpIYzaJ6tEY",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          comment: btn,
          rate: 5,
          elementId: id,
        }),
      });
      if (response.ok) {
        console.log("commento postato");
        dispatch({type: 'UPDATE'});
      } else {
        throw new Error("errore nel post del commento");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Slider {...settings} className="my-3">
      {bntOption.map((btn, i) => (
        <div
          key={i}
          className="btnSectionComm btn bg-transparent border border-1 border-black rounded-5 text-center px-4 carouselComment"
          onClick={() => {postComment(btn);}}
        >
          {btn}
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
