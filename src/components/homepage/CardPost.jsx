import { useState } from "react";
import { Card, Col, Image, Row } from "react-bootstrap";
import {
  ChatDots,
  HandThumbsUp,
  HandThumbsUpFill,
} from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Comments from "./Comments";

const CardPost = ({ post }) => {
  const dispatch = useDispatch();
  const favoritesPosts = useSelector(
    (state) => state.interaction.favouritesPosts
  );
  const [show, setShow] = useState(false);

  return (
    <>
      <Card key={post._id} className="mb-4">
        <Card.Body className="p-0">
          <div className="p-3">
            <div className="d-flex align-items-center mb-3">
              <Image
                src={post.user.image}
                roundedCircle
                className="me-3"
                width={50}
                height={50}
              />
              <div>
                <Link
                  to={`/profile/${post.user._id}`}
                  className="mb-0 fw-bold nav-link"
                >
                  {post.user.name || "Anonymous"}
                </Link>
                <small className="text-muted">
                  {new Date(post.createdAt).toLocaleString()}
                </small>
              </div>
            </div>
            <p>{post.text}</p>
          </div>
          {post.image && <img src={post.image} style={{ width: "100%" }} />}
          <div style={{ width: "90%", margin: "auto" }}>
            <Row className="mt-4 py-2 border-top">
              <Col className="d-flex justify-content-center">
                {!favoritesPosts.includes(post) ? (
                  <button
                    className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                    onClick={() =>
                      dispatch({ type: "ADD_POST", payload: post })
                    }
                  >
                    <HandThumbsUp />
                    <p className="m-0 ms-2">Mi Piace</p>
                  </button>
                ) : (
                  <button
                    className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_POST",
                        payload: post,
                      })
                    }
                  >
                    <HandThumbsUpFill className="text-primary" />
                    <p className="m-0 ms-2">Non mi Piace</p>
                  </button>
                )}
              </Col>
              <Col className="d-flex justify-content-center">
                <button className="d-flex justify-content-center align-items-center border-0 bg-transparent" onClick={() => setShow(!show)}>
                  <ChatDots />
                  <p className="m-0 ms-2">Commenta</p>
                </button>
              </Col>
            </Row>
          </div>
        </Card.Body>
        {show && <Comments id={post._id} />}
      </Card>
    </>
  );
};

export default CardPost;
