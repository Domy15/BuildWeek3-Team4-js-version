import { ExclamationLg, XLg } from "react-bootstrap-icons";
import { Button, Card, Image, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";

const ActivityCardPost = ({ post }) => {
  const dispatch = useDispatch();
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
      <Card key={post._id} className="mb-4 mx-2" style={{height: "400px"}}>
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
              <p className="p-0 m-0 elipses">{post.text}</p>
            </div>
          </div>
          {post.image && (
            <img src={post.image} style={{ width: "100%", height: "280px", borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }} />
          )}
        </Card.Body>
      </Card>
      <Modal show={showConfirm} onHide={() => setShowConfirm(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="d-flex align-items-center">
            <ExclamationLg className="text-danger" size={30} />
            ATTENZIONE
            <ExclamationLg className="text-danger" size={30} />
          </Modal.Title>
        </Modal.Header>
        {post.user._id === "67975ee416f6350015fecb97" ? (
          <Modal.Body>Sei sicuro/a di voler eliminare il tuo post?</Modal.Body>
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
  );
};

export default ActivityCardPost;
