import { Col, Container, Row } from "react-bootstrap";
import JobsList from "./JobsList";
import { useLocation } from "react-router-dom";
import AsideDetailes from "./AsideDetailes";

const JobDetails = () => {
  const location = useLocation();
  const jobs = location.state;

  return (
    <Container>
      <Row>
        <Col xs={6} className="p-1">
          <JobsList jobs={jobs.jobs} />
        </Col>
        <Col xs={6} className="p-1">
          <AsideDetailes job={jobs.job} />
        </Col>
      </Row>
    </Container>
  );
};

export default JobDetails;
