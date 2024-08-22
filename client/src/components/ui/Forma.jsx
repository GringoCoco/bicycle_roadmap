import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Maps from "./Maps";
import useStore from "../../store/store";
import axiosInstance from "../api/axiosInstance";

export default function Forma() {
  const { points } = useStore();

  const submitHandler = async (e) => {
    e.preventDefault();

    // Получаем данные формы
    const formData = new FormData(e.target);

    // Преобразуем массив точек маршрута в JSON-строку
    const [routeStartPoint, routeEndPoint] = points;

    // Преобразуем FormData в объект
    const dataToSend = {
      routeName: formData.get("routeName"),
      routeLocation: formData.get("routeLocation"),
      routeLength: formData.get("routeLength"),
      routeStartPoint: routeStartPoint[0], // Добавляем начальную точку маршрута
      routeEndPoint: routeStartPoint[1], // Добавляем конечную точку маршрута
    };

    try {
      // Отправляем данные на сервер
      await axiosInstance.post("/routers/createroute", dataToSend);

      console.log(dataToSend);
      // navigate("/entries"); // Перенаправление при успешной отправке
    } catch (error) {
      console.error("Ошибка при отправке данных:", error);
    }
  };
  return (
    <Form className="w-50" onSubmit={submitHandler}>
      <Maps />
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Название маршрута</Form.Label>
        <Form.Control
          name="routeName"
          type="text"
          placeholder="введите название"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Длина маршрута в км</Form.Label>
        <Form.Control
          name="routeLength"
          type="number"
          placeholder="Введите длину маршрута"
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
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Карта</Form.Label>
        <Form.Control
          name="routeMap"
          type="file"
          placeholder="Загрузите карту"
        />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Добавить
      </Button>
    </Form>
  );
}
