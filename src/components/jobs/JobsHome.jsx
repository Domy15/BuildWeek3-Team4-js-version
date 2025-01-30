import { Card, Col, Container, Row } from "react-bootstrap";
import CardProfile from "../homepage/CardProfile";

import Linkfoot from "../homepage/Linkfoot";
import JobsButton from "./JobsButton";
/* import Linkjobs from "./Linkjobs"; */

const JobsHome = () => {
  return (
    <Container className="p-0 py-3">
      <div className="classMargin">
        <Row>
          <Col md={3}>
            <div className=" sticky-top z-custom">
              <Card className="pb-3">
                <CardProfile />
              </Card>
              <JobsButton />
            </div>
          </Col>
          <Col md={6}>{/* <Linkjobs /> */}</Col>
          <Col md={3}>
            <div className="sticky-top z-custom ">
              <Linkfoot />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default JobsHome;
