/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight, } from "react-bootstrap-icons";
import { useSelector } from "react-redux";
import ActivityCardPost from "./ActivityCardPost";


function SampleNextArrow(props) {
  const { style, onClick } = props;
  return (
    <ChevronRight
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "28%",
        right: "0%",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { style, onClick } = props;
  return (
    <ChevronLeft
      style={{
        ...style,
        display: "block",
        position: "absolute",
        top: "28%",
        left: "0%",
      }}
      onClick={onClick}
    />
  );
}

const Activity = ({ param }) => {
  const update = useSelector((state) => state.user.update);
  const [posts, setPosts] = useState([]);
  const [change, setChange] = useState(false);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    variableWidth: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const getPosts = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        if (param) {
          setPosts(data.filter((post) => post.user._id === param).reverse());
        } else {
          setPosts(
            data
              .filter((post) => post.user._id === "67975ee416f6350015fecb97")
              .reverse()
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, [param, update]);

  return (
    <div className="mb-3 border rounded-2 bg-white">
      <h4 className="pt-3 ps-3">Attività</h4>
      <div>
        <button
          className="btn btn-outline-secondary me-2 ms-4 fw-bold text-white bg-success border-0 rounded-5"
          onClick={() => setChange(false)}
        >
          Post
        </button>
        <button
          className="btn btn-outline-secondary fw-bold rounded-5"
          onClick={() => setChange(true)}
        >
          Commenti
        </button>
        {posts && !change && (
          <Slider {...settings} className="mt-4 h-50 px-4">
            {posts.map((post) => (
              <div key={post._id}>
                <ActivityCardPost post={post} />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </div>
  );
};

export default Activity;
