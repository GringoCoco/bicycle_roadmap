import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SignUpPage() {
  return (
    <Row>
      <Col md={{ span: 6, offset: 3 }} className="mt-5">
        <h3 className="text-center">Регистрация</h3>
        <Form >
          <Form.Group className="mb-3" >
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Введите имя"
            />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Email</Form.Label>
            <Form.Control name="email" type="email" placeholder="Введите email" />
          </Form.Group>
          <Form.Group className="mb-3" >
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Придумайте пароль"
            />
          </Form.Group>
          <Button variant="outline-info" type="submit">
            Отправить
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
