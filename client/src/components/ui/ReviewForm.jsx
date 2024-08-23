import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import Container from "react-bootstrap/esm/Container";
import axiosInstance from "../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import useUser from "../../hooks/useUser";

export default function ReviewForm() {
  const [comment, setComment] = React.useState("");
  const [rating, setRating] = React.useState();
  const { id } = useParams(); // id маршрута из URL
  const { user } = useUser();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user.status !== "logged") {
      alert(
        "Только авторизованные пользователи могут оставлять отзывы и оценки."
      );
      return;
    }
    try {
      await axiosInstance.post(`/routers/reviews/route/${id}`, {
        comment,
        rating,
      });
      setComment("");
      setRating();
      navigate("/");
    } catch (error) {
      console.log("Ошибка при отправке отзыва:", error);
      alert("Ошибка при отправке отзыва");
    }
  };

  return (
    <>
      <Container
        style={{ width: "40rem", display: "flex", justifyContent: "center" }}
      >
        <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <Form.Control
            style={{ width: "100%" }}
            type="text"
            placeholder="Оставь свой отзыв"
            value={comment}
            onChange={(e) => setComment(e.target.value)} // Обновляем состояние при изменении текста
          />
          <Form.Control
            style={{ width: "100%", marginBottom: "10px" }}
            type="number"
            placeholder="Оставьте свою оценку (1-5)"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
          />
          <Button variant="primary" type="submit" style={{ marginTop: "10px" }}>
            Отправить
          </Button>
        </Form>
      </Container>
    </>
  );
}
