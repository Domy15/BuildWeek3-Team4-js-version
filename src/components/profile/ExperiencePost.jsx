import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ExperiencePost = (props) => {
  const dispatch = useDispatch();

  const [value, setValue] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  const postExp = async (e) => {
    e.preventDefault();
    const token =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

    const url = `https://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences`;
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(value),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        
      });
      if (response.ok) {
        dispatch({ type: "UPDATE" });
        props.changeUpdate()
        props.hide()

        console.log(`Esperienza aggiunta!`);
      } else {
        throw new Error("Errore nella fetch dei dati");
      }
    } catch (error) {
      console.log("Errore: ", error);
    }
  };
  return (
    <>
      <Form onSubmit={postExp}>
        <div className="mb-3">
          <Row className="mb-3">
            <Form.Group as={Col} controlId="Qualifica">
              <Form.Label>Qualifica</Form.Label>
              <Form.Control
                type="text"
                placeholder="Esempio: Retail Sales Manager"
                required
                value={value.role}
                onChange={(e)=>setValue({ ...value, role: e.target.value})}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="Azienda">
              <Form.Label>Azienda o organizzazione</Form.Label>
              <Form.Control type="text" placeholder="Esempio: Retex" required value={value.company} onChange={(e)=>setValue({ ...value, company: e.target.value})}/>
            </Form.Group>
          </Row>

          <Form.Check
            type="checkbox"
            label="Attualmente ricopro questo incarico"
          />
          <div className="d-flex gap-5">
            <Form.Group as={Col} controlId="inizio">
              <Form.Label>Data di inizio</Form.Label>
              <Form.Control type="date" name="start" required value={value.startDate} onChange={(e)=>setValue({ ...value, startDate: e.target.value})}/>
            </Form.Group>

            <Form.Group as={Col} controlId="fine">
              <Form.Label>Data di fine</Form.Label>
              <Form.Control type="date" name="end" value={value.endDate} onChange={(e)=>setValue({ ...value, endDate: e.target.value})}/>
            </Form.Group>
          </div>

          <Form.Group controlId="Località" className="mb-3">
            <Form.Label>Località</Form.Label>
            <Form.Control
              type="text"
              placeholder="Esempio: Milano, Italia"
              required
              value={value.area}
              onChange={(e)=>setValue({ ...value, area: e.target.value})}
            />
          </Form.Group>

          <Form.Label>Descrizione</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Descrivi la tua esperienza"
            style={{ height: "100px" }}
            required
            value={value.description}
            onChange={(e)=>setValue({ ...value, description: e.target.value})}
          />
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button variant="danger" type="button" className="ms-3" onClick={()=> {props.hide()}}>
          Annulla
        </Button>
      </Form>
    </>
  );
};

export default ExperiencePost;
