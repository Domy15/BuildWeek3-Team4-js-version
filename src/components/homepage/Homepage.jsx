
import { Col, Container, Row } from "react-bootstrap";
import NewsHome from "../homepage/NewsHome";
import HomeJobs from "./HomeJobs";

const Homepage = () => {
  return (
    <Container> 
      <Row> 
        <Col md ={3}>
        </Col>
        <Col md ={6}>
        <NewsHome />
        </Col>
        <Col md ={3}>
        <HomeJobs/>
        </Col>
         </Row>               
    </Container>
  );
};

export default Homepage;




