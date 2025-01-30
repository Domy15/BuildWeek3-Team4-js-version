const AsideDetailes = ({ job }) => { 
    
    function Prova({ description }) {
        return <div dangerouslySetInnerHTML={{ __html: description }}></div>;
      }

  return (
    <>
      <div className="bg-white classMargin p-3">
        <p>{job.company_name}</p>
        <h2 className>
          {job.title}
        </h2>
        <p>{job.candidate_required_location}</p>
        <Prova description={job.description} />
      </div>
    </>
  );
};

export default AsideDetailes;
