/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import {  BookmarkDash, BookmarkPlus, DashLg, Geo, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const JobsList = () => {
  const [jobs, setJobs] = useState([]);
  const favouritesJobs = useSelector((state) => state.interaction.favouritesJobs);
  const dispatch = useDispatch();
  const [sortOrder, setSortOrder] = useState("recenti");
  const [show, setShow] = useState(5);
  const location = useLocation();
  const query = location.state;
  const formatDate = (isoDate) => {
    const date = new Date(isoDate);
    return date.toLocaleString({
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour24: true,
    });
  };

  const fetchquery = async () => {
    try {
      const response = await fetch(
        `https://strive-benchmark.herokuapp.com/api/jobs?search=${query || "data"}`
      );
      if (response.ok) {
        const data = await response.json();
        setJobs(data.data);
        console.log(data.data);
      } else {
        throw new Error("Errore nel recupero dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showMore = () => {
    setShow(show + 3);
  };

  const showLess = () => {
    setShow(show - 3);
  };

  useEffect(() => {
    fetchquery();
  }, [query]);

  return (
    <>
      <div className="bg-white p-3 rounded shadow-sm mt-4">
        <div className="d-flex align-items-center mb-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
            alt="imageProfile"
            width={30}
            height={30}
            className="rounded border shadow-sm me-3"
          />
          <h5 className="fw-medium text-dark m-0 h4">
            Altre offerte di lavoro per te
          </h5>
        </div>
        <hr />
        <p>
          In base al tuo profilo, alle tue preferenze e ad attività come
          candidature, ricerche e salvataggi
        </p>

        <div className="mb-3  d-flex align-items-center justify-content-end">
          <p className="m-0 me-2"> Ordina per:</p>
          <div className="d-flex position-relative">
            <select
              className="form-select ms-auto"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="recenti">Più recenti</option>
              <option value="meno_recenti">Meno recenti</option>
            </select>
          </div>
        </div>
        <div className="list-group ">
          {jobs &&
            show > 0 &&
            jobs.slice(0, show).map((job) => (
            <div key={job._id} className="p-3 border rounded-2 my-3 bg-white">
              <div className="d-flex align-items-center justify-content-between">
                <Link
                  to="/Jobs/detailes"
                  state={{ jobs: jobs, job: job }}
                  className="fw-bold h6 m-0"
                >
                  {job.title}
                </Link>
                {!favouritesJobs.includes(job) ? (
                    <button
                      className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                      onClick={() =>
                        dispatch({ type: "ADDJOB", payload: job })
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
                          payload: job,
                        })
                      }
                    >
                      <BookmarkDash className="fs-4 fs-md-4 fs-lg-3" />
                    </button>
                  )}
              </div>
              <p className="m-0 my-2">{job.company_name}</p>
              <div className="d-flex align-items-center">
                <Geo size={25} className="iconLabel3" />
                <p className="m-0 fst-italic">
                  {job.candidate_required_location}
                </p>
              </div>
              <div className="mt-2 d-flex justify-content-between align-items-center text-muted">
                <div>
                  {job.publication_date && (
                    <p> {formatDate(job.publication_date)}</p>
                  )}
                </div>
                <Link to='/Jobs/detailes' state={{ jobs: jobs, job: job }} className="button-71 btn btn-primary rounded-4 px-2 py-1 m-0">
                  Vedi di più
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="d-flex align-items-center justify-content g-1">
          <Button
            className="button-29 d-flex gap-1 rounded-5 me-2"
            onClick={() => showMore()}
          >
            <PlusLg size={25} className="fw-bold" />
          </Button>
          <Button
            className="button-29 d-flex gap-1 rounded-5"
            onClick={() => showLess()}
          >
            <DashLg size={25} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default JobsList;
