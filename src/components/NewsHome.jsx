import  { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/Image";

const HomePage = () => {
  const [posts, setPosts] = useState([]);
  const [newPostText, setNewPostText] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = "https://striveschool-api.herokuapp.com/api/posts/";
  const AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

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
    } catch (error) {
      console.error("Error creating post:", error.message);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mt-4">
      <Card className="mb-4 p-4">
        <div className="d-flex align-items-center">
          <Image
            src="https://placecats.com/40/40"
            roundedCircle
            className="me-3"
          />
          <Form.Control
            type="text"
            placeholder="Start a post..."
            value={newPostText}
            onChange={(e) => setNewPostText(e.target.value)}
            className="me-3"
          />
          <Button onClick={createPost} disabled={!newPostText.trim()}>
            Post
          </Button>
        </div>
      </Card>

      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map((post) => (
          <Card key={post._id} className="mb-4">
            <Card.Body>
              <div className="d-flex align-items-center mb-3">
                <Image
                  src="https://placecats.com/40/40"
                  roundedCircle
                  className="me-3"
                />
                <div>
                  <p className="mb-0 fw-bold">{post.username || "Anonymous"}</p>
                  <small className="text-muted">
                    {new Date(post.createdAt).toLocaleString()}
                  </small>
                </div>
              </div>
              <p>{post.text}</p>
            </Card.Body>
          </Card>
        ))
      )}
    </div>
  );
};

export default HomePage;
