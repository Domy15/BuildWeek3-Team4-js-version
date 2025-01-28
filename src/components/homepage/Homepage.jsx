import { Col,Row, Container } from 'react-bootstrap'
import NewsHome from './NewsHome'
import HomeProfile from './HomeProfile'

const Homepage = ()=>{
    return(
        <Container>
            <Row>
                <Col md={3}>
                <HomeProfile/>
                </Col>
                <Col md={6}>
                <NewsHome/>
                </Col>
                <Col md={3}>
                </Col>
            </Row>
        </Container>
    )

}
export default Homepage