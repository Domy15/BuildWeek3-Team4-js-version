import { Col } from "react-bootstrap";
import { BookmarkDash, Geo } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SingleCompany = ({ item }) => {
  const jobs = useSelector((state) => state.interaction.favouritesJobs);
  const dispatch = useDispatch();
  return (
    <Col key={item._id} xs={12} className="p-3 border rounded-2 my-3 bg-white">
      <div className="d-flex justify-content-between">
        <h5 className="p-0 mb-2">{item.title}</h5>
        {jobs.includes(item) && (
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
          <small>{new Date(item.publication_date).toLocaleDateString()}</small>
        </p>
        <Link
          to="/Jobs/detailes"
          state={{ jobs: item, job: item }}
          className="button-71 btn btn-primary rounded-4 px-2 py-1 m-0"
        >
          Vedi di più
        </Link>
      </div>
    </Col>
  );
};

export default SingleCompany;
