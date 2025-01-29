/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import SingleComment from "./SingleComment";

const Comments = ({ id }) => {
  const [comments, setComments] = useState();
  console.log(id);

  const getComments = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzlhNDQ5ZmU4NWJhZDAwMTUyOWIzYmYiLCJpYXQiOjE3MzgxNjMzNTksImV4cCI6MTczOTM3Mjk1OX0.S9qk4G5SYOLIs4g-EIbipTCE-zz2V6sAdpIYzaJ6tEY",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setComments(
          data.filter((comment) => {
            return comment.elementId === id;
          })
        );
      } else {
        throw new Error("errore nell'acquisizione dei dati");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getComments();
  }, [id]);

  return (
    <>
      {comments && comments.length > 0 && (
        comments.map((comment) => {
            return (
            <SingleComment key={comment._id} comment={comment}/>
        )})
      )}
    </>
  );
};

export default Comments;
