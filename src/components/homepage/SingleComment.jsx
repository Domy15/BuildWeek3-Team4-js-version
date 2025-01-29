import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { ThreeDots } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";

const SingleComment = ({ comment }) => {
  const dispatch= useDispatch()

  const deleteComment = async () => {
    if (comment.author !== "Pablo") {
      return;
    }
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhNDQ5ZmU4NWJhZDAwMTUyOWIzYmYiLCJpYXQiOjE3MzgxNjMzNTksImV4cCI6MTczOTM3Mjk1OX0.S9qk4G5SYOLIs4g-EIbipTCE-zz2V6sAdpIYzaJ6tEY",
          },
        }
      );
      if (response.ok) {
        console.log("commento eliminato");
        dispatch({
          type: 'UPDATE',
        })
      } else {
        throw new Error("errore nell'eleliminazione del commento");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Row className="p-3 w-100">
      <Col>
        <h6>{comment.author}</h6>
        <p className="m-0">{comment.comment}</p>
      </Col>
      <Col className="justify-content-end d-flex">
        <DropdownButton
          className="available-custom"
          variant="trasparent"
          id="dropdown-basic-button"
          title={<ThreeDots className="text-black" />}
        >
          <Dropdown.Item onClick={deleteComment}>Elimina</Dropdown.Item>
        </DropdownButton>
      </Col>
    </Row>
  );
};

export default SingleComment;
