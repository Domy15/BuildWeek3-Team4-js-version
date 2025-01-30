import { useState } from "react";
import { Buildings, GeoAltFill } from "react-bootstrap-icons";

const SingleExperience = (props) => {
  const dateStart = new Date(props.exp.startDate);
  const dateEnd = props.exp.endDate ? new Date(props.exp.endDate) : null;
  const [visibile, setIsVisible] = useState(false);

  return (
    <div className="d-flex gap-3 mt-3 p-3 custom-border-bottom">
      <img
        src={props.exp.image}
        className="me-2 imgExp"
        width={60}
        height={60}
      />
      <div className="w-100">
        <h4 className="h4 mb-2 m-0">{props.exp.role}</h4>
        <div className="d-flex mb-2">
          <Buildings size={20} />
          <p className="ms-2 m-0 h6 pExp">{props.exp.company}</p>
        </div>

        <p className="m-0 pExp text-secondary mb-2">
          {dateStart.toLocaleDateString()}
          {dateEnd && `-${dateEnd.toLocaleDateString()}`}
        </p>
        <div className="d-flex">
          <div className="d-flex align-items-center">
            <GeoAltFill size={20} />
            <p className="h6 m-0 pExp text-secondary">{props.exp.area}</p>
          </div>
          <div className="ms-auto">
            <button
              className="btnShowExp m-0"
              onClick={() => setIsVisible(!visibile)}
            >
              {visibile ? "Nascondi" : "Mostra Altro"}
            </button>
          </div>
        </div>
        {visibile && <p className="m-0 my-2 pExp">{props.exp.description}</p>}
      </div>
    </div>
  );
};

export default SingleExperience;
