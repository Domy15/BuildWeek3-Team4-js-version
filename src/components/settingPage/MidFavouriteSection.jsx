import { Col, Row } from "react-bootstrap";
import SinglePost from "./SinglePost";

const MidFavouriteSection = (props) => {
  return (
    <>
      <Row className=" border rounded-3 bg-white">
        <Col xs={12} className=" border-bottom">
          <h3 className=" fw-normal p-3 ">{props.title}</h3>
        </Col>
        <Col xs={12} className="p-0">
          {props.item.map((item) => {
            return <SinglePost key={item._id} post={item} />;
          })}
        </Col>
      </Row>

    </>
  );
};

export default MidFavouriteSection;
