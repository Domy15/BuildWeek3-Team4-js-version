import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import SingleExpSettings from "./SingleExpSettings";
import ExperiencePost from "./ExperiencePost";

const ExperiencesSetting = () => {
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";
  const [exp, setExp] = useState([]);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(true);

  const getExperience = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences`,
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

  const changeUpdate = () => {
    setUpdate(!update);
  };

  const hide = () => {
    setShow(false);
  };

  useEffect(() => {
    getExperience();
  }, [update]);

  return (
    <Container>
      <Row>
        <Col>
          <h2>Esperienze lavorative</h2>
          <p>Aggiungi o modifica le tue esperienze lavorative.</p>
        </Col>
      </Row>
      <Row className="mb-3">
        {exp &&
          exp.map((item, i) => {
            return (
              <div key={i}>
                <SingleExpSettings exp={item} changeUpdate={changeUpdate} />
              </div>
            );
          })}
      </Row>
      <Row>
        <Col>
          {!show && (
            <Button variant="outline-primary" onClick={() => setShow(true)}>
              Aggiungi esperienza
            </Button>
          )}
        </Col>
      </Row>
      {show && <ExperiencePost changeUpdate={changeUpdate} hide={hide} />}
    </Container>
  );
};

export default ExperiencesSetting;
