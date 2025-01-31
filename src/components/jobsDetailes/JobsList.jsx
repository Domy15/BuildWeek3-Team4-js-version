import { useState } from "react";
import { Button } from "react-bootstrap";
import { ChevronBarDown, DashLg, Geo, InfoCircleFill, PlusLg } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const JobsList = ({ jobs }) => {
  const [show, setShow] = useState(30);

  const showMore = () => {
    setShow(show + 20);
  };

  const showLess = () => {
    setShow(show - 10);
  };

  return (
    <div className="bg-white rounded-2 border classMargin p-3 ">
      <div className="d-flex align-items-center justify-content-between">
        <h1 className="h4 fw-light m-0">Related Jobs:</h1>
        <ChevronBarDown size={25} className="me-2" />
      </div>
      <hr />
      <div className="overflow-y-scroll overflow-x-hidden px-1" style={{height: '70vh'}}>
        {show > 0 && jobs.slice(0, show).map((job) => (
          <div
            key={job._id}
            className="d-flex justify-content-between border rounded-2 my-3 p-3 bg-white"
          >
            <div>
              <Link
                to="/Jobs/detailes"
                state={{ jobs: jobs, job: job }}
                className="fw-bold h5 m-0"
              >
                {job.title}
              </Link>
              <p className="m-0 my-2">{job.company_name}</p>
              <div className="d-flex align-items-center">
                <Geo size={25} className="iconLabel3" />
                <p className="m-0 fst-italic">
                  {job.candidate_required_location}
                </p>
              </div>
            </div>
            <div className=" me-4">
              <InfoCircleFill size={20} />
            </div>
          </div>
        ))}
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
    </div>
  );
};

export default JobsList;
