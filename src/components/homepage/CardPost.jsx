import { useState } from "react";
import { Card, Image } from "react-bootstrap";
import {
  HandThumbsUp,
  HandThumbsUpFill,
  ThreeDots,
  XLg,
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
  const [showPost, setShowPost] = useState(true);

  return (
    <>
     {showPost && <Card key={post._id} className="mb-4">
        <Card.Body className="p-0">
          <div className="px-3 pt-3">
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
                    to={post.user._id !== "67975ee416f6350015fecb97" ? (`/profile/${post.user._id}`) : ('/profile')}
                    className="mb-0 fw-bold nav-link">
                    {post.user.name} 
                    {' '}
                    {post.user.surname}
                  </Link>
                  <small className="text-muted">
                    {new Date(post.createdAt).toLocaleString()}
                  </small>
                </div>
              </div>
              <div className="d-flex justify-content-end">
                <ThreeDots size={20} className="m-2" />
                <XLg size={20} className="m-2" onClick={() => setShowPost(false)} style={{cursor: 'pointer'}} />
              </div>
            </div>
            <div className="bg-white p-2">
              <p className="p-0 m-0">{post.text}</p>
            </div>
          </div>
          {post.image && <img src={post.image} style={{ width: "100%" }} />}
          <hr className="mx-3" />
          <div className="d-flex w-100 flex-wrap align-items-center justify-content-center">
            <div className="d-flex align-items-center justify-content-center p-2 w-25">
              {!favoritesPosts.includes(post) ? (
                <button
                  className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                  onClick={() => dispatch({ type: "ADD_POST", payload: post })}
                >
                  <HandThumbsUp className="me-2 fs-4 fs-md-4 fs-lg-3" />
                  <p className="m-0 ms-2 subtitlesHome">Mi Piace</p>
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
                  <HandThumbsUpFill className="text-primary fs-4 fs-md-4 fs-lg-3" />
                  <p className="m-0 ms-2 subtitlesHome">Non mi Piace</p>
                </button>
              )}
            </div>
            <div
              className="d-flex align-items-center justify-content-center p-2 w-25"
              onClick={() => setShow(!show)}
              style={{ cursor: "pointer" }}
            >
              <i className="bi bi-chat-square me-2 fs-4 fs-md-4 fs-lg-3"></i>
              <p className="m-0 subtitlesHome">Commenta</p>
            </div>
            <div className="d-flex align-items-center justify-content-center p-2 w-25 flex-sm-row flex-md-column flex-lg-row text-md-center">
              <i className="bi bi-share me-2 me-md-0 fs-4 fs-md-4 fs-lg-3"></i>
              <p className="m-0 ms-2 subtitlesHome">Diffondi il post</p>
            </div>

            <div className="d-flex align-items-center justify-content-center p-2 w-25">
              <i className="bi bi-send me-2 fs-4 fs-md-4 fs-lg-3"></i>
              <p className="m-0 subtitlesHome">Invia</p>
            </div>
          </div>
        </Card.Body>
        {show && <Comments id={post._id} />}
      </Card>}
    </>
  );
};

export default CardPost;
