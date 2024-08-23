import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Maps from "./Maps";
import useStore from "../../store/store";
import axiosInstance from "../api/axiosInstance";
import { useNavigate } from "react-router-dom";
import { calculateRouteLength } from "../api/calculateDistance";

export default function Forma() {
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
      routeLength: routeLength,
      routeStartPoint: routeStartPoint, // Добавляем начальную точку маршрута
      routeEndPoint: routeEndPoint, // Добавляем конечную точку маршрута
    };
    console.log(dataToSend);

    try {
      // Отправляем данные на сервер
      await axiosInstance.post("/routers/createroute", dataToSend);
      e.target.reset();
      deleteCoords();
      navigate("/");
      // Вызов функции очистки после успешной отправки данных
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };

  return (
    <Form className="w-50" onSubmit={submitHandler}>
      <Maps />
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Название маршрута</Form.Label>
        <Form.Control
          name="routeName"
          type="text"
          placeholder="Введите название"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Локация</Form.Label>
        <Form.Control
          name="routeLocation"
          type="text"
          placeholder="Укажите локацию"
        />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Добавить
      </Button>
    </Form>
  );
}
