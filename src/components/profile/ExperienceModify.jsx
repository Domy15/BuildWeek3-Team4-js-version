import { Button, InputGroup } from "react-bootstrap";
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
      <Form className="modifyForm my-3">
        <div className="mb-3">
          {/* <FloatingLabel
            controlId="floatingInput"
            label="Qualifica"
            className=""
          >
            <Form.Control
              type="text"
              size="sm"
              placeholder="Esempio: Retail Sales Manager"
              required
              value={value.role}
              onChange={(e) => setValue({ ...value, role: e.target.value })}
            />
          </FloatingLabel> */}

          <InputGroup className="mb-1">
            <InputGroup.Text id="basic-addon2">Qualifica</InputGroup.Text>
            <Form.Control
              placeholder="Esempio: Retail Sales Manager"
              aria-label="Qualifica"
              aria-describedby="basic-addon2"
              required
              value={value.role}
              onChange={(e) => setValue({ ...value, role: e.target.value })}
            />
          </InputGroup>

          {/* <FloatingLabel
            controlId="floatingInput"
            label="Azienda o organizzazione"
          >
            <Form.Control
              type="text"
              size="sm"
              placeholder="Esempio: Retex"
              required
              value={value.company}
              onChange={(e) => setValue({ ...value, company: e.target.value })}
            />
          </FloatingLabel> */}

          <InputGroup className="mb-1">
            <InputGroup.Text id="basic-addon2">
              Azienda o organizzazione
            </InputGroup.Text>
            <Form.Control
              placeholder="Esempio: Retex"
              aria-label="Qualifica"
              aria-describedby="basic-addon2"
              required
              value={value.role}
              onChange={(e) => setValue({ ...value, company: e.target.value })}
            />
          </InputGroup>

          <div className="d-flex gap-5">
            {/* <FloatingLabel controlId="floating3" label="Data di inizio">
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
            </FloatingLabel> */}

            <InputGroup className="mb-1">
              <InputGroup.Text id="basic-addon2">
                Data di inizio
              </InputGroup.Text>
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
            </InputGroup>

            <InputGroup className="mb-1">
              <InputGroup.Text id="basic-addon2">Data di fine</InputGroup.Text>
              <Form.Control
                type="date"
                size="sm"
                name="start"
                required
                value={value.endDate}
                onChange={(e) =>
                  setValue({ ...value, endDate: e.target.value })
                }
              />
            </InputGroup>

            {/* 
            <FloatingLabel controlId="floatingInput" label="Data di fine">
              <Form.Control
                type="date"
                size="sm"
                name="end"
                value={value.endDate}
                onChange={(e) =>
                  setValue({ ...value, endDate: e.target.value })
                }
              />
            </FloatingLabel> */}
          </div>
          <InputGroup className="mb-1">
            <InputGroup.Text id="basic-addon2">Località</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Esempio: Milano, Italia"
              required
              value={value.area}
              onChange={(e) => setValue({ ...value, area: e.target.value })}
            />
          </InputGroup>
          <InputGroup className="mb-1">
            <InputGroup.Text id="basic-addon2">Descrizione</InputGroup.Text>
            <Form.Control
              type="text"
              size="sm"
              placeholder="Descrivi la tua esperienza"
              required
              value={value.description}
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
          </InputGroup>
          {/* 
          <FloatingLabel controlId="floatingInput" label="Località">
            <Form.Control
              type="text"
              placeholder="Esempio: Milano, Italia"
              required
              value={value.area}
              onChange={(e) => setValue({ ...value, area: e.target.value })}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingInput" label="Descrizione">
            <Form.Control
              as="textarea"
              size="sm"
              placeholder="Descrivi la tua esperienza"
              style={{ height: "50px" }}
              required
              value={value.description}
              onChange={(e) =>
                setValue({ ...value, description: e.target.value })
              }
            />
          </FloatingLabel> */}
        </div>
        <div className="text-end">
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
        </div>
       
      </Form>
    </>
  );
};

export default ExperienceModify;
