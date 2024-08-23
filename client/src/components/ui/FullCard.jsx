import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import CurrentMap from "./Map";
import ModalWindow from "./ModalWindow";
import { useEffect, useState } from "react";

export default function FullCard({ user, route }) {
  const [name, setName] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const deleteHandler = async () => {
    await axiosInstance.delete(`/routers/${route.id}`);
    navigate("/");
  };

  useEffect(() => {
    axiosInstance(`routers/route/${id}/user`).then((data) =>
      setName(data.data.creator.name)
    );
  }, []);

  return (
    <Card style={{ width: "40rem" }}>
      <CurrentMap bdPoints={[route.routeStartPoint, route.routeEndPoint]} />
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{route.routeName}</Card.Title>
        <Card.Text>Автор маршрута: {name}</Card.Text>
        <Card.Text>Длина маршрута: {route.routeLength}</Card.Text>
        <Card.Text>Локация: {route.routeLocation}</Card.Text>
        {user.status === "logged" && user.data.id === route.routeCreator && (
          <div className="d-flex flex-row justify-content-end gap-4">
            <ModalWindow route={route} />
            <Button onClick={deleteHandler} variant="success" className="mb-2">
              Удалить
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}
