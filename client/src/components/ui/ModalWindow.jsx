import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Maps from "./Maps";
import useStore from "../../store/store";
import axiosInstance from "../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { calculateRouteLength } from "../api/calculateDistance";
import CurrentMap from "./Map";

function ModalWindow({ route }) {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { coords, deleteCoords } = useStore();
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();

    // Получаем данные формы
    const formData = new FormData(e.target);

    // Преобразуем массив точек маршрута в JSON-строку
    const [routeStartPoint, routeEndPoint] = coords;

    const routeLength = calculateRouteLength(coords).toFixed(2);

    // Преобразуем FormData в объект
    const dataToSend = {
      routeName: formData.get("routeName"),
      routeLocation: formData.get("routeLocation"),
      routeStartPoint: routeStartPoint, // Добавляем начальную точку маршрута
      routeEndPoint: routeEndPoint,
      routeLength: routeLength, // Добавляем конечную точку маршрута
    };
    console.log(dataToSend);

    try {
      // Отправляем данные на сервер
      await axiosInstance.put(`/routers/${id}`, dataToSend);
      e.target.reset();
      deleteCoords();
      navigate("/");
      // Вызов функции очистки после успешной отправки данных
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <>
      <Button variant="success" className="mb-2" onClick={handleShow}>
        Изменить
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Изменить маршрут</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form
            className="w-100"
            onSubmit={submitHandler}
          >
            <Maps />
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Название маршрута</Form.Label>
              <Form.Control
                name="routeName"
                type="text"
                placeholder="Введите название"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Локация</Form.Label>
              <Form.Control
                name="routeLocation"
                type="text"
                placeholder="Укажите локацию"
                required
              />
            </Form.Group>
            <Button variant="outline-success" type="submit">
              Изменить
            </Button>
          </Form>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Закрыть
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Сохранить изменения
          </Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}

export default ModalWindow;
