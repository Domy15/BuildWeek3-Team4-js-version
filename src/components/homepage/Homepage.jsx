import { Col, Container, Row } from "react-bootstrap";
import NewsHome from "../homepage/NewsHome";
import HomeJobs from "./HomeJobs";
import HomeProfile from "./HomeProfile";

const Homepage = () => {
  return (
    <Container className="containerHome">
      <Row>
        <Col lg={3} sm={12}>
          <HomeProfile />
        </Col>
        <Col lg={6} sm={12} >
          <NewsHome />
        </Col>
        <Col xs={12} lg={3}>
          <HomeJobs />
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
