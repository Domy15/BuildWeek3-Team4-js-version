import { Button, Container } from "react-bootstrap";
import { PlusLg } from "react-bootstrap-icons";

const JobsButton = () => {
  return (
    <Container className="text-center d-flex">
      <Button
        variant="outline-primary"
        className="mt-4 p-2 w-100 rounded-5 d-flex justify-content-center"
      >
        <PlusLg size={25}></PlusLg>
        <span className="ms-2">Pubblica offerta</span>
      </Button>
    </Container>
  );
};
export default JobsButton;
