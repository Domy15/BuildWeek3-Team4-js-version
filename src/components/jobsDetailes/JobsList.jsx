import { Geo } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const JobsList = ({jobs}) => {
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

    return (
        <div className="bg-white classMargin">
          {jobs.map((job) => (
            <div key={job._id} className="p-3 my-3">
              <Link to='/Jobs/detailes' state={{ jobs: jobs, job: job }} className="fw-bold h4 m-0">{job.title}</Link>
              <p className="m-0 my-2">{job.company_name}</p>
              <div className="d-flex align-items-center">
                <Geo size={25} className="iconLabel3" />
                <p className="m-0 fst-italic">
                  {job.candidate_required_location}
                </p>
              </div>
              <div className="mt-2 d-flex justify-content-between text-muted">
                <div>
                  {job.publication_date && (
                    <p> {formatDate(job.publication_date)}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
    )
}

export default JobsList;