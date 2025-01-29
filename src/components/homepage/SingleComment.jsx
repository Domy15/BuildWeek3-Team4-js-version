const SingleComment = ({ comment }) => {
  return (
    <div className="p-3">
      <h6>{comment.author}</h6>
      <p className="m-0">{comment.comment}</p>
    </div>
  );
};

export default SingleComment;
