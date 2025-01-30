import { Geo, InfoCircleFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const JobsList = ({ jobs }) => {
  return (
    <div className="bg-white rounded-2 border classMargin p-3">
      {jobs.map((job) => (
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
    </div>
  );
};

export default JobsList;
