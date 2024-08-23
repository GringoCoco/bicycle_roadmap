import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


export default function RouteCard({ route, user }) {
  console.log(route);

  const rating = route.avgRating;
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <span>{route.routeName}</span>
          <span>⭐️{Math.round(rating * 10) / 10}</span>
        </Card.Title>

        <Card.Text>локация: {route.routeLocation}</Card.Text>
        <Link
          className="btn btn-success mt-2 w-50"
          to={`/oneroute/${route.id}`}
        >
          подробнее
        </Link>

        {user.status === "logged" && user.data.id === route.routeCreator && (
          <div className="d-flex flex-row justify-content-end gap-4">
            <Button variant="success" className="mb-2">
              Изменить
            </Button>
            <Button
              onClick={deleteHandler}
              variant="success"
              className="mb-2"
            >
              Удалить
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
