import { Card, Image } from "react-bootstrap";
import { HandThumbsDownFill } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SinglePost = ({ post }) => {
  const favoritesPosts = useSelector(
    (state) => state.interaction.favouritesPosts
  );
  const dispatch = useDispatch();
  return (
    <Card.Body className="p-0 border-bottom">
      <div className="p-3">
        <div className="d-flex align-items-center mb-3 justify-content-between">
          <div className="d-flex">
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
          <div className="d-flex justify-content-end">
            {favoritesPosts.includes(post) && (
              <button
                className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_POST",
                    payload: post,
                  })
                }
              >
                <HandThumbsDownFill color="red" size={20} />
              </button>
            )}
          </div>
        </div>
        <div className="bg-white p-2 d-flex gap-3 align-items-center">
          {post.image && <img src={post.image} style={{ width: "20%" }} />}
          <p>{post.text}</p>
        </div>
      </div>
    </Card.Body>
  );
};

export default SinglePost;
