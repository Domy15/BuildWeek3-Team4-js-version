import { useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

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

const Activity = ({ param }) => {
    const [change, setChange] = useState(false);
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
    <div className="mb-3 border rounded-2 bg-white">
      <h4 className="pt-3 ps-3">Attività</h4>
      <div>
        <button className="btn btn-outline-secondary me-2 ms-4 fw-bold text-white bg-success border-0 rounded-5" onClick={() => setChange(false)}>
          Post
        </button>
        <button className="btn btn-outline-secondary fw-bold rounded-5" onClick={() => setChange(true)}>
          Commenti
        </button>
      </div>
    </div>
  );
};

export default Activity;
