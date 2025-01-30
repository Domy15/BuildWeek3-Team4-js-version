import { Card, Image } from "react-bootstrap";
import { PersonFillDash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const SinglePerson = ({ post }) => {
  const follow = useSelector((state) => state.interaction.favourites);
  const dispatch = useDispatch();

  return (
    <Card.Body className="p-0 border-bottom">
      <div className="p-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Image
              src={post.image}
              roundedCircle
              className="me-3"
              width={50}
              height={50}
            />
            <div>
              <Link
                to={`/profile/${post._id}`}
                className="mb-0 fw-bold nav-link"
              >
                {post.name + post.surname || "Anonymous"}
              </Link>
              <p className="descriptionAside text-muted mb-2">{post.title}</p>
            </div>
          </div>
          <div className="d-flex justify-content-end">
            {follow.includes(post) && (
              <button
                className="followBtn btn border-1 border-black btn-sm d-flex align-items-center"
                onClick={() =>
                  dispatch({
                    type: "REMOVE",
                    payload: post,
                  })
                }
              >
                <PersonFillDash size={20} className="me-1" />
                Smetti di seguire
              </button>
            )}
          </div>
        </div>
      </div>
    </Card.Body>
  );
};

export default SinglePerson;
