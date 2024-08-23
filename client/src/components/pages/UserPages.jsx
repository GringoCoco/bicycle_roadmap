import Container from "react-bootstrap/esm/Container";
import Forma from "../ui/Forma";

export default function UserPages() {
  return (
    <Container
      style={{
        width: "400rem",
        display: "flex",
        justifyContent: "center",
        marginTop: 40,
      }}
    >
      <Forma />
    </Container>
  );
}
