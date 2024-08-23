import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CurrentMap from "./Map";

export default function FullCard({ route }) {
  console.log(route);
  console.log(route.routeStartPoint, route.routeEndPoint);

  return (
    <Card style={{ width: "40rem" }}>
      <CurrentMap bdPoints={[route.routeStartPoint, route.routeEndPoint]} />
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}
