import { useEffect, useState } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import {
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
    <Container className="mt-4">
      <Row className="align-items-center justify-content-center bg-white mb-5 p-3 rounded border border-1">
        <Col xs={1}>
          {profile && (
            <Image
              src={profile.image}
              roundedCircle
              className="me-3"
              width={40}
              height={40}
            />
          )}
        </Col>
        <Col xs={10}>
          <Form.Control
            type="text"
            placeholder="Start a post..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            className="me-3 rounded-5"
          />
        </Col>
        <Col xs={1}>
          <Button onClick={createPost} disabled={!newPostText.trim()}>
            Post
          </Button>
        </Col>
        <Col xs={4} className="d-flex align-items-center fs-3 text-primary">
          <Images />
          <Form.Control
            type="file"
            onChange={(e) => {
              setImgPost(e.target.files[0]);
            }}
            className="fileInput"
          />
        </Col>
        <Col></Col>
        <Col></Col>
      </Row>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.slice(0, showmore).map((post) => (
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
                        onClick={() => dispatch({ type: "ADD_POST", payload: post })}
                      >
                        <HandThumbsUp />
                        <p className="m-0 ms-2">Mi Piace</p>
                      </button>
                    ) : (
                      <button
                        className="d-flex justify-content-center align-items-center border-0 bg-transparent"
                        onClick={() => dispatch({
                          type: "REMOVE_POST",
                          payload: post,
                        })}
                      >
                        <HandThumbsUpFill className="text-primary"/>
                        <p className="m-0 ms-2">Mi Piace</p>
                      </button>
                    )}
                  </Col>
                  <Col className="d-flex justify-content-center">
                    <button className="d-flex justify-content-center align-items-center border-0 bg-transparent">
                      <ChatDots />
                      <p className="m-0 ms-2">Commenta</p>
                    </button>
                  </Col>
                </Row>
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
  );
};

export default NewsHome;
