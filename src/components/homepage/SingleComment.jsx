import {
  ClockFill,
  EmojiLaughing,
  Image,
  ThreeDots,
} from "react-bootstrap-icons";

const SingleComment = ({ comment }) => {
  const bntOption = [
    "Mi piace",
    "Geniale",
    "Suggerimenti Utili",
    "Molto Utile",
    "Interessante",
    "Ottimo consiglio",
    "Concordo",
  ];
  return (
    <div className="p-3">
      <hr />

      <div className="d-flex overflow-auto">
        {bntOption.map((btn, i) => (
          <p
            key={i}
            className="btnSectionComm btn bg-transparent border border-1 border-black rounded-4 m-0 text-center px-2 "
          >
            {btn}
          </p>
        ))}
      </div>
      <hr />

      <div className="d-flex align-items-center justify-content-start p-0 mt-3">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
          alt="imageProfile"
          width={40}
          height={40}
          className="border rounded-5 me-2"
        />
        <div className="w-100 d-flex justify-content-around p-1 searchComment border border-1  rounded-5">
          <input
            type="text"
            name="searchComment"
            id="searchComment"
            placeholder="Aggiungi un commento.."
            className="w-75 inputComment"
          />
          <EmojiLaughing size={25} />
          <Image size={25} />
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-end mt-4">
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
            <ThreeDots size={10} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
