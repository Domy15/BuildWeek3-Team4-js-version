import { Buildings, Geo } from "react-bootstrap-icons";
import GetImage from "../profile/GetImage";

const AsideDetailes = ({ job }) => {
  function Prova({ description }) {
    return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
  }

  return (
    <>
      <div className="bg-white classMargin rounded-2 border p-3">
        <div className="d-flex align-items-center gap-2 mb-2">
          <Buildings size={25} />
          <p className="m-0 fw-light h4">
            {job.company_name}
            <span className="fst-italic fw-lighter h5 ms-2">offers you...</span>
          </p>
        </div>
        <hr />
        <h2 className>{job.title}</h2>
        <div className="d-flex mb-4">
          <Geo size={25} className="iconLabel3 me-2" />
          <p className="m-0 fst-italic">{job.candidate_required_location}</p>
        </div>
        <div className="agencyImage">
          <GetImage />
        </div>
        <hr />
        <Prova description={job.description} />
      </div>
    </>
  );
};

export default AsideDetailes;
