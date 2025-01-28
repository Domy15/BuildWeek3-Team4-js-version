import { Button } from "react-bootstrap";
import { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const ExperienceModify = (props) => {
  const TOKEN =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Nzk3NWVlNDE2ZjYzNTAwMTVmZWNiOTciLCJpYXQiOjE3Mzc5NzM0NzYsImV4cCI6MTczOTE4MzA3Nn0.PGJBXtnIkXE6LDZ33f1lboEIywMNz9bqJZVEcvQw_Qc";

  //   const [show, setShow] = useState(false);
  //   const [update, setUpdate] = useState(true);
  const [value, setValue] = useState({
    role: props.item.role,
    company: props.item.company,
    startDate: new Date(props.item.startDate).toISOString().split("T")[0],
    endDate: new Date(props.item.endDate).toISOString().split("T")[0],
    description: props.item.description,
    area: props.item.area,
  });
  //   console.log(props.item.startDate);
  const putExperience = async () => {
    try {
      const URL = `api.herokuapp.com/api/profile/67975ee416f6350015fecb97/experiences/${props.item._id}`;
      const response = await fetch(URL, {
        method: "PUT",
        body: JSON.stringify(value),
        headers: {
          Authorization: `${TOKEN}`,
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        console.log("dati aggiornati");
      } else {
        throw new Error("errore");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Form className="modifyForm">
        <div className="mb-3">
          <FloatingLabel controlId="floatingInput" label="Qualifica">
            <Form.Control
              type="text"
              size="sm"
              placeholder="Esempio: Retail Sales Manager"
              required
              value={value.role}
              onChange={(e) => setValue({ ...value, role: e.target.value })}
            />
          </FloatingLabel>

          <FloatingLabel>
            Azienda o organizzazione
            <Form.Control
              type="text"
              size="sm"
              placeholder="Esempio: Retex"
              required
              value={value.company}
              onChange={(e) => setValue({ ...value, company: e.target.value })}
            />
          </FloatingLabel>

          <Form.Check
            type="checkbox"
            label="Attualmente ricopro questo incarico"
          />
          <div className="d-flex gap-5">
            <FloatingLabel>
              Data di inizio
              <Form.Control
                type="date"
                size="sm"
                name="start"
                required
                value={value.startDate}
                onChange={(e) =>
                  setValue({ ...value, startDate: e.target.value })
                }
              />
            </FloatingLabel>

            <FloatingLabel>
              Data di fine
              <Form.Control
                type="date"
                size="sm"
                name="end"
                value={value.endDate}
                onChange={(e) =>
                  setValue({ ...value, endDate: e.target.value })
                }
              />
            </FloatingLabel>
          </div>

          <FloatingLabel>Località</FloatingLabel>
          <Form.Control
            type="text"
            size="sm"
            placeholder="Esempio: Milano, Italia"
            required
            value={value.area}
            onChange={(e) => setValue({ ...value, area: e.target.value })}
          />

          <FloatingLabel>
            Descrizione
            <Form.Control
              as="textarea"
              size="sm"
              placeholder="Descrivi la tua esperienza"
              style={{ height: "100px" }}
              required
              value={value.description}
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
          </FloatingLabel>
        </div>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Button
          variant="danger"
          type="button"
          className="ms-3"
          onClick={() => {
            props.hide();
          }}
        >
          Annulla
        </Button>
      </Form>
    </>
  );
};

export default ExperienceModify;
