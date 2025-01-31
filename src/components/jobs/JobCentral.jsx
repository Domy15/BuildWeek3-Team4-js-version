/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { BookmarkDash, BookmarkPlus, Geo, XLg } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const JobCentral = () => {
  const jobs = useSelector((state) => state.interaction.favouritesJobs);
  const dispatch = useDispatch();
  const [cat, setCat] = useState();
  const [array, setArray] = useState();
  const [show, setShow] = useState(true);
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
    <>
      {show && (
        <Container className="p-0 py-3 mb-3 bg-white rounded-3 border py-3 mb-3">
          <Row className="m-2 border-bottom">
            <Col className="mb-3">
              <div className="d-flex align-items-center">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                  alt="imageProfile"
                  width={30}
                  height={30}
                  className="rounded border shadow-sm me-3"
                />
                <p className="fw-medium text-dark m-0 h4">Ricerche Rapide</p>
                <XLg
                  className="ms-auto"
                  size={20}
                  style={{ cursor: "pointer" }}
                  onClick={() => setShow(false)}
                />
              </div>
            </Col>
          </Row>
          <div className=" d-flex flex-wrap gap-2 mx-2 my-3">
            {categories.map((item, i) => (
              <div
                key={i}
                className="btn bg-transparent border border-1 border-black rounded-5 text-center carouselComment cursor-pointer btnRapidSearch"
                onClick={() => {
                  setCat(item);
                }}
              >
                <small>{item}</small>
              </div>
            ))}
          </div>
          <Row className="px-1 overflow-y-scroll overflow-x-hidden mx-1" style={{height: '50vh'}}>
            {array &&
              array.map((item) => {
                return (
                  <Col
                    key={item._id}
                    xs={12}
                    className="p-3 border rounded-2 my-3 bg-white"
                  >
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
                    <p className="p-0 m-0 mb-2">{item.company_name}</p>
                    <div className="d-flex">
                      <Geo size={25} className="iconLabel3" />
                      <p className="p-0 ms-2 fst-italic">
                        {item.candidate_required_location}
                      </p>
                    </div>
                    <div className="d-flex justify-content-between">
                      <p className="p-0 m-0 opacity-50">
                        <small>
                          {new Date(item.publication_date).toLocaleDateString()}
                        </small>
                      </p>
                      <Link
                        to="/Jobs/detailes"
                        state={{ jobs: array, job: item }}
                        className="button-71 btn btn-primary rounded-4 px-2 py-1 m-0"
                      >
                        Vedi di più
                      </Link>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </Container>
      )}
    </>
  );
};

export default JobCentral;
