/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BookmarkDash, BookmarkPlus, Linkedin } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const JobCentral = () => {
  const jobs = useSelector((state) => state.interaction.favouritesJobs);
  const dispatch = useDispatch();
  const [cat, setCat] = useState();
  const [array, setArray] = useState();
  const categories = [
    "Data",
    "Finance / Legal",
    "Product",
    "Marketing",
    "Customer Service",
    "Software Development",
    "DevOps / Sysadmin",
    "Human Resources",
    "All others",
  ];

  const getRandomJob = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?category=${cat}&limit=5`
      );
      if (response.ok) {
        const data = await response.json();
        setArray(data.data);
        console.log(array);
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setCat(categories[Math.floor(Math.random() * categories.length)]);
  }, []);

  useEffect(() => {
    getRandomJob();
  }, [cat]);

  return (
    <Container className="p-0 py-3 mb-3 bg-white rounded-3 border py-3 my-3">
      <Row className="m-2 border-bottom">
        <Col>
          <div className="d-flex align-items-center">
            <Linkedin className="me-2" />
            <p className=" fw-bold fs-5 p-0 m-0">Ricerche Rapide</p>
          </div>
          <p className="text-muted"></p>
        </Col>
      </Row>
      <div className=" d-flex flex-wrap gap-2 mx-2 my-3">
        {categories.map((item, i) => (
          <div
            key={i}
            className="btn bg-transparent border border-1 border-black rounded-5 text-center carouselComment"
            onClick={() => {
              setCat(item);
            }}
          >
            <small>{item}</small>
          </div>
        ))}
        {console.log(cat)}
      </div>
      <Row className="px-3">
        {array &&
          array.map((item) => {
            return (
              <Col key={item._id} xs={12} className="border-bottom py-3">
                <div className="d-flex justify-content-between">
                  <h5 className="p-0 mb-2">{item.title}</h5>
                  {!jobs.includes(item) ? (
                    <button
                      className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                      onClick={() =>
                        dispatch({ type: "ADDJOB", payload: item })
                      }
                    >
                      <BookmarkPlus className="fs-4 fs-md-4 fs-lg-3" />
                    </button>
                  ) : (
                    <button
                      className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                      onClick={() =>
                        dispatch({
                          type: "REMOVEJOB",
                          payload: item,
                        })
                      }
                    >
                      <BookmarkDash className="fs-4 fs-md-4 fs-lg-3" />
                    </button>
                  )}
                </div>
                <p className="p-0 m-0">{item.company_name}</p>
                <p className=" text-muted p-0 m-1">
                  {item.candidate_required_location}
                </p>
                <div className="d-flex justify-content-between">
                  <p className="p-0 m-0 opacity-50">
                    <small>
                      {new Date(item.publication_date).toLocaleDateString()}
                    </small>
                  </p>
                  <Link to="/Jobs/detailes" state={array} className="nav-link">
                    Dettagli
                  </Link>
                </div>
              </Col>
            );
          })}
      </Row>
    </Container>
  );
};

export default JobCentral;
