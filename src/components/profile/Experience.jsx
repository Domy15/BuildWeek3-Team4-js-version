import { useEffect, useState } from "react";
import SingleExperience from "./SingleExperience";
import { Button } from "react-bootstrap";
import { PencilFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

const Experience = ({ param }) => {
  const navigate = useNavigate()
  const [exp, setExp] = useState([]);
  const randomNumber = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
  const [numExp, setNumExp] = useState(randomNumber);

  const getExperience = async () => {
    const id = param || "67975ee416f6350015fecb97";
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${id}/experiences`,
        {
          headers: {
            Authorization: TOKEN,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setExp(data);
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const showMore = () => {
    setNumExp(exp.length);
  };

  useEffect(() => {
    getExperience();
  }, []);

  return (
    <div className="mb-3 border rounded-2 bg-white">
    <div className=" d-flex justify-content-between">
      <h4 className="pt-3 ps-3">Esperienza</h4>
      <Button
        variant="transparent"
        className="ms-auto"
        onClick={() => {
          navigate("/profile/setting/experiences");
        }}
      >
        <PencilFill size={25} />
      </Button>
    </div>
      
      {exp &&
        exp.map(
          (exp, i) => i < numExp && <SingleExperience key={exp._id} exp={exp} />
        )}
      {numExp < exp.length && (
        <Button
          variant="light"
          size="sm"
          className=" show-more-btn"
          onClick={showMore}
        >
          {" "}
          Mostra tutte le competenze
        </Button>
      )}
    </div>
  );
};

export default Experience;
