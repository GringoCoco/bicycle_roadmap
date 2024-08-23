import RouteCard from "../ui/RouteCard";
import useRoutes from "../../hooks/useRoutes";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function MainPage({ user, review }) {
  const { routes } = useRoutes();
  return (
    <Container style={{ marginTop: 40 }}>
      <Row className="g-4">
        {routes.map((route) => (
          <Col key={route.id} sm={12} md={6} lg={4} className="d-flex">
            <RouteCard review={review} route={route} user={user} className="h-100 w-100" />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
