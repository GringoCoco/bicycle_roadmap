import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Forma() {
  return (
    <Form className="w-50" >
      <Form.Group className="mb-3 " controlId="formBasicEmail">
        <Form.Label>Название маршрута</Form.Label>
        <Form.Control name="routeName" type="text" placeholder="введите название" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Длина маршрута в км</Form.Label>
        <Form.Control name="routeLength" type="number" placeholder="Введите длину маршрута" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Локация</Form.Label>
        <Form.Control name="routeLocation" type="text" placeholder="Укажите локацию" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Карта</Form.Label>
        <Form.Control name="routeMap" type="file" placeholder="Загрузите карту" />
      </Form.Group>
      <Button variant="outline-success" type="submit">
        Добавить
      </Button>
    </Form>
  )
}
