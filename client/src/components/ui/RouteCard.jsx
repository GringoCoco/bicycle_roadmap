import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export default function RouteCard({ route, user }) {
  // useNavigate()
  // window.location = url
  // `/api/img/${route.routeMap}` <- по адресу /api вряд ли картинки
  // route.routeMap
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img onClick={() => window.location = `/api/img/${route.routeMap}`} variant="top" src={route.routeMap} />
      <Card.Body>
        <Card.Title style={{display: 'flex', justifyContent: 'space-between'}}>
          <span>
          {route.routeName} 
          </span>
          <span>
          ⭐️{route.routeLength}
          </span>
        </Card.Title>

        <Card.Text>локация: {route.routeLocation}</Card.Text>
        <Link
          className="btn btn-success mt-2 w-50"
          to={`/oneroute/${route.id}`}
        >
          подробнее
        </Link>

        {user.status === "logged" && user.data.id === route.user_id && (
          <div className="d-flex flex-row justify-content-end gap-4">
            <Button variant="outline-info" className="mb-2">
              Изменить
            </Button>
            <Button
              onClick={deleteHandler}
              variant="outline-info"
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
