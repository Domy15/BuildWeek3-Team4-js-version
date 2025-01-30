import { useState } from "react";
import {
  Button,
  Card,
  Dropdown,
  DropdownButton,
  Image,
  Modal,
} from "react-bootstrap";
import {
  ExclamationLg,
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
  const [showConfirm, setShowConfirm] = useState(false);

  const deletePost = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/posts/${post._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc",
          },
        }
      );
      if (response.ok) {
        console.log("Post eliminato con successo");
      } else {
        throw new Error("Errore nell'eliminazione dei post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {showPost && (
        <>
          <Card key={post._id} className="mb-4">
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
                        to={
                          post.user._id !== "67975ee416f6350015fecb97"
                            ? `/profile/${post.user._id}`
                            : "/profile"
                        }
                        className="mb-0 fw-bold nav-link"
                      >
                        {post.user.name} {post.user.surname}
                      </Link>
                      <small className="text-muted">
                        {new Date(post.createdAt).toLocaleString()}
                      </small>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end">
                    <DropdownButton
                      className="available-custom"
                      variant="trasparent"
                      id="dropdown-basic-button"
                      title={<ThreeDots className="text-black" />}
                    >
                      <Dropdown.Item
                        onClick={() => {
                          setShowPost(false);
                        }}
                      >
                        Nascondi
                      </Dropdown.Item>
                    </DropdownButton>
                    <XLg
                      size={20}
                      className="m-2"
                      onClick={() => {
                        setShowConfirm(true);
                      }}
                      style={{ cursor: "pointer" }}
                    />
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
                      onClick={() =>
                        dispatch({ type: "ADD_POST", payload: post })
                      }
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
          </Card>
          <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
            <Modal.Header closeButton>
              <Modal.Title className="d-flex align-items-center"><ExclamationLg className="text-danger" size={30} />ATTENZIONE<ExclamationLg className="text-danger" size={30} /></Modal.Title>
            </Modal.Header>
            {post.user._id === "67975ee416f6350015fecb97" ? (
              <Modal.Body>
                Sei sicuro/a di voler eliminare il tuo post?
              </Modal.Body>
            ) : (
              <Modal.Body>Non puoi eliminare i post degli altri.</Modal.Body>
            )}
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setShowConfirm(false)}>
                Annulla
              </Button>
              {post.user._id === "67975ee416f6350015fecb97" && (
                <Button
                  variant="primary"
                  onClick={() => {
                    deletePost();
                    setShowConfirm(false);
                    dispatch({ type: "UPDATE" });
                  }}
                >
                  Conferma
                </Button>
              )}
            </Modal.Footer>
          </Modal>
        </>
      )}
    </>
  );
};

export default CardPost;
