import { Card, Col, Container, Row } from "react-bootstrap";
import CardProfile from "../homepage/CardProfile";

import Linkfoot from "../homepage/Linkfoot";
import JobsButton from "./JobsButton";
/* import Linkjobs from "./Linkjobs"; */

const JobsHome = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={3}>
          <div className=" sticky-top z-custom">
            <Card className="mt-5 pb-3">
              <CardProfile />  
            </Card>
            <JobsButton />        
          </div>
          </Col>
          <Col md={6}>
          {/* <Linkjobs /> */}
          </Col>
          <Col md={3} className="mt-5">
          <div className="sticky-top z-custom ">
          <Linkfoot />
          </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default JobsHome;
