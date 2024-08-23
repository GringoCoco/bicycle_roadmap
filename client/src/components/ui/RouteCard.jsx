import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

import axiosInstance from "../api/axiosInstance";


export default function RouteCard({ route }) {

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


      </Card.Body>
    </Card>
  );
}
