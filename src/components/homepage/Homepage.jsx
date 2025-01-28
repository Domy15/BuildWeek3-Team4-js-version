
import { Col, Container, Row } from "react-bootstrap";
import NewsHome from "../homepage/NewsHome";
import HomeJobs from "./HomeJobs";

const Homepage = () => {
  return (
    <Container> 
      <Row> 
        <Col md ={3} sm={12}>
        </Col>
        <Col lg ={6} sm={12} md ={7}>
        <NewsHome />
        </Col>
        <Col lg ={3} md ={2} className=" d-lg-block d-sm-none d-xxs-none">
        <HomeJobs/>
        </Col>
         </Row>               
    </Container>
  );
};

export default Homepage;




