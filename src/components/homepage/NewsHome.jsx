import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import {
  BlockquoteLeft,
  Calendar2,
  HeartFill,
  Images,
  ThreeDots,
  XLg,
  ChatDots,
  HandThumbsUp,
  HandThumbsUpFill,
  Images,
} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NewsHome = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [loading, setLoading] = useState(false);
  const [showmore, setShowmore] = useState(6);
  const [imgPost, setImgPost] = useState();
  const [profile, setProfile] = useState();
  const dispatch = useDispatch();
  const favoritesPosts = useSelector(
    (state) => state.interaction.favouritesPosts
  );

  const API_URL = "https://striveschool-api.herokuapp.com/api/posts/";
  const AUTH_TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

  const fetchProfile = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/me`,
        {
          headers: {
            Authorization: AUTH_TOKEN,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setProfile(data);
      } else {
        throw new Error("errore nella fetch dei dati del tuo profilo");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL, {
        headers: {
          Authorization: AUTH_TOKEN,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPosts(data.reverse());
    } catch (error) {
      console.error("Error fetching posts:", error.message);
    } finally {
      setLoading(false);
    }
  };

  const createPost = async () => {
    if (!newPostText.trim()) return;

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: AUTH_TOKEN,
        },
        body: JSON.stringify({ text: newPostText }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const newPost = await response.json();
      setPosts([newPost, ...posts]);
      setNewPostText("");
      addImgPost(newPost._id);
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  const addImgPost = async (id) => {
    try {
      const formData = new FormData();
      if (imgPost) {
        formData.append("post", imgPost);
      }

      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/" + id,
        {
          method: "POST",
          headers: {
            Authorization: AUTH_TOKEN,
          },
          body: formData,
        }
      );
      if (response.ok) {
        console.log("immagine caricata");
        fetchPosts();
      } else {
        throw new Error("Errore");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleShowMore = () => {
    setShowmore(showmore + 6);
  };

  useEffect(() => {
    fetchProfile();
    fetchPosts();
  }, []);

  return (
    <>
      <Container className="mt-4">
        <div className="align-items-center justify-content-center bg-white mb-5 p-3 rounded border border-1">
          <Row className="px-3 mb-3">
            <Col xs={2}>
              <Image
                src="https://placecats.com/40/40"
                roundedCircle
                className="me-3"
              />
            </Col>
            <Col xs={8}>
              <Form.Control
                type="text"
                placeholder="Start a post..."
                value={newPostText}
                onChange={(e) => setNewPostText(e.target.value)}
                className="me-3 rounded-5 mb-3"
              />
            </Col>
            <Col xs={2}>
              <Button onClick={createPost} disabled={!newPostText.trim()}>
                Post
              </Button>
            </Col>
          </Row>
          <Row>
            <Col xs={5}>
              {/* <Form>
            <Form.Group className="d-flex align-items-center">
              <Form.Label className="descFileInp position-absolute">
                <Images size={25} />
                Contenuti multimediali
              </Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => {
                  setImgPost(e.target.files[0]);
                }}
                className="fileInput position-absolute"
              />
            </Form.Group>
          </Form> */}
              <div className="d-flex align-items-center">
                <label
                  htmlFor="file-upload"
                  className="btn p-0 labelUpload d-flex align-items-center "
                >
                  <Images size={20} className="iconLabel " />
                  <p className="subtitlesHome fw-medium align-self-center m-0 ps-2">
                    Contenuti Multimediali
                  </p>
                </label>
                <input
                  type="file"
                  id="file-upload"
                  name=""
                  className="d-none"
                  onChange={(e) => {
                    setImgPost(e.target.files[0]);
                  }}
                />
              </div>
            </Col>
            <Col xs={3} className="p-0">
              <div className="d-flex align-items-center justify-content-center fw-medium">
                <Calendar2 size={20} className="iconLabel2" />
                <p className="subtitlesHome m-0 ps-2">Evento</p>
              </div>
            </Col>
            <Col xs={4}>
              <div className="d-flex align-items-center justify-content-end fw-medium">
                <BlockquoteLeft size={20} className="iconLabel3" />
                <p className="subtitlesHome m-0 ps-2">Scrivi un articolo</p>
              </div>
            </Col>
          </Row>
        </div>
        <hr />
        <div className="d-flex justify-content-end">
          <p className="titleHome mb-2 p-2">Visualizzazione del feed</p>
        </div>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.slice(0, showmore).map((post) => (
            <Card key={post._id} className="mb-4">
              <Card.Body className="p-0">
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
                      <ThreeDots size={20} className="m-2" />
                      <XLg size={20} className="m-2" />
                    </div>
                  </div>
                  <div className="bg-white p-2 rounded border border-1">
                    <p>{post.text}</p>
                  </div>
                </div>
                {post.image && (
                  <img src={post.image} style={{ width: "100%" }} />
                )}

                <div className="mx-3">
                  <HeartFill size={15} className="iconLabel4" />
                </div>
                <hr className="m-1" />
                <div className="d-flex w-100 flex-wrap align-items-center">
                  <div className="d-flex align-items-center p-2 w-25">
                    <i className="bi bi-hand-thumbs-up me-2 fs-4 fs-md-4 fs-lg-3"></i>
                    <p className="m-0 subtitlesHome">Consiglia</p>
                  </div>
                  <div className="d-flex align-items-center p-2 w-25">
                    <i className="bi bi-chat-square me-2 fs-4 fs-md-4 fs-lg-3"></i>
                    <p className="m-0 subtitlesHome">Commenta</p>
                  </div>
                  <div className="d-flex align-items-center p-2 w-25 flex-sm-row flex-md-column flex-lg-row text-md-center">
                    <i className="bi bi-share me-2 me-md-0 fs-4 fs-md-4 fs-lg-3"></i>
                    <p className="m-0 ms-2 subtitlesHome">Diffondi il post</p>
                  </div>

                  <div className="d-flex align-items-center p-2 w-25">
                    <i className="bi bi-send me-2 fs-4 fs-md-4 fs-lg-3"></i>
                    <p className="m-0 subtitlesHome">Invia</p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          ))
        )}
        <div className="text-center mt-4">
          <button className="btn btn-primary" onClick={handleShowMore}>
            Show More
          </button>
        </div>
      </Container>
    </>
  );
};

export default NewsHome;
