import { Button } from "react-bootstrap";
import { PersonFillAdd, PersonFillDash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";

const CompanyAside = (props) => {
  const follow = useSelector((state) => state.interaction.favourites);
  const dispatch = useDispatch();
  return (
    <div className="d-flex p-3 mt-3 shadow rounded bg-trasparent">
      <div>
        <img
          src={props.src}
          alt="imageProfile"
          className="profileImageAside rounded-circle mx-3 align-self-start"
        />
      </div>
      <div className="infoAside overflow-hidden">
        <p className="h5 mb-1">{props.name}</p>
        <p className="descriptionAside text-muted mb-2">{props.text}</p>
        {!follow.includes(props.name) ? (
          <Button
            variant="primary"
            size="sm"
            className="d-flex align-items-center"
            onClick={() => {
              dispatch({
                type: "ADD",
                payload: props.name,
              });
            }}
          >
            <PersonFillAdd size={20} className="me-1" />
            Segui
          </Button>
        ) : (
          <Button
            variant="primary"
            size="sm"
            className="d-flex align-items-center"
            onClick={() => {
              dispatch({
                type: "REMOVE",
                payload: props.name,
              });
            }}
          >
            <PersonFillDash size={20} className="me-1" />
            Smetti di seguire
          </Button>
        )}
      </div>
    </div>
  );
};

export default CompanyAside;
