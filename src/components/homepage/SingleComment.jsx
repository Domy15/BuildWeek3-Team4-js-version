import {
  ClockFill,
  ThreeDots,
} from "react-bootstrap-icons";
import { Dropdown, DropdownButton } from "react-bootstrap";
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
    <div className="p-3 border-top mx-3">
      <div className="d-flex align-items-center justify-content-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="imageProfile"
          width={40}
          height={40}
          className="border rounded-5 me-2 align-self-baseline"
        />

        <div className="d-flex flex-column" style={{ width: "400px" }}>
          <h6 className="m-0 fw-bold">{comment.author}</h6>
          <p className="m-0 commentHomeSection">{comment.comment}</p>

          <p className="m-0 text-secondary fw-medium">Consiglia | Rispondi</p>
        </div>
        <div className="align-self-start">
          <div className="d-flex align-items-center gap-1">
            <ClockFill size={10} />
            <p className="m-0">Ago</p>
            <DropdownButton
          className="available-custom"
          variant="trasparent"
          id="dropdown-basic-button"
          title={<ThreeDots className="text-black" />}
        >
          <Dropdown.Item onClick={deleteComment}>Elimina</Dropdown.Item>
        </DropdownButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
