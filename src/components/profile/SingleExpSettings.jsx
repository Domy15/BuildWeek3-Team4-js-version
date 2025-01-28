import { Col, Row } from "react-bootstrap";
import SingleExperience from "./SingleExperience";
import { PencilFill, Trash3Fill } from "react-bootstrap-icons";
import { useState } from "react";

const SingleExpSettings = (props) => {
const [form, setForm] = useState(true)

  const deleteExp = async (id) => {
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

    const url = `https://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences/${id}`;
    try {
      const response = await fetch(url, {
        method:"DELETE",
        headers: {
            Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        props.changeUpdate()
        console.log(`Esperienza cancellata!`);
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log("Errore: ", error);
    }
  };

  return (
    <Row className=" align-items-center custom-border-bottom">
      <Col xs={10}>
        {form && <SingleExperience exp={props.exp} />}

      </Col>
      <Col className=" d-flex gap-4 justify-content-end">
        {form && <PencilFill size={30} onClick={()=>setForm(false)}/>}
        {console.log(props.exp._id)}
        {form && <Trash3Fill size={30} onClick={() => {deleteExp(props.exp._id)}} />}
      </Col>
    </Row>
  );
};

export default SingleExpSettings;
