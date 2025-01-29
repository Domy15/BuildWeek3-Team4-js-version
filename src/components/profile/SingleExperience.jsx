const SingleExperience = (props) => {
    const dateStart = new Date(props.exp.startDate);
    const dateEnd = props.exp.endDate ? new Date(props.exp.endDate) : null;
  
    return (
      <div className="d-flex mt-3 p-3 custom-border-bottom">
        <img src={props.exp.image} className="me-2 imgExp" />
        <div>
          <h4 className="h6 m-0">{props.exp.role}</h4>
          <p className="m-0 pExp">{props.exp.company}</p>
          <p className="m-0 pExp text-secondary">
            {dateStart.toLocaleDateString()}
            {dateEnd && `-${dateEnd.toLocaleDateString()}`}
          </p>
          <p className="m-0 pExp text-secondary">{props.exp.area}</p>
          <p className="m-0 my-2 pExp">{props.exp.description}</p>
        </div>
      </div>
    );
  };
  
  export default SingleExperience;
  