import { Col, Container, Row } from "react-bootstrap";
import NewsHome from "../homepage/NewsHome";
import HomeJobs from "./HomeJobs";
import HomeProfile from "./HomeProfile";

const Homepage = () => {
  return (
    <Container> 
      <Row> 
        <Col md ={3} sm={12}>
        <HomeProfile />
        </Col>
        <Col lg={6} sm={12} md={7}>
          <NewsHome />
        </Col>
        <Col lg={3} md={2} className=" d-none d-lg-block">
          <HomeJobs />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
