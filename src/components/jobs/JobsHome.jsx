import { Card, Col, Container, Row } from "react-bootstrap";
import CardProfile from "../homepage/CardProfile";
import Linkfoot from "../homepage/Linkfoot";
import JobsButton from "./JobsButton";
import JobCentral from "./JobCentral";
import JobsList from "./JobsList";
import JobsCardProfile from "./JobsCardProfile";



const JobsHome = () => {
  return (
    <Container className="p-0 py-3">
      <div>
        <Row>
          <Col md={3}>
            <div className="sticky-top z-custom classMargin">
              <Card className="pb-3">
                <CardProfile />
              </Card>
              <JobsCardProfile />
              <JobsButton />
            </div>
          </Col>
          <Col md={6} className="classMargin">
            {" "}
            <JobCentral/>
            <JobsList />
          </Col>
          <Col md={3}>
            <div className="sticky-top z-custom classMargin">
              <Linkfoot />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default JobsHome;
