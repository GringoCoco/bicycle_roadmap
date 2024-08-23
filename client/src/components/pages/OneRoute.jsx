import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
// import useRoute from "../../hooks/useRoute";
import FullCard from "../ui/FullCard";
import ReviewForm from "../ui/ReviewForm";
import Reviews from "../ui/Reviews";
import Container from "react-bootstrap/esm/Container";
// import ymaps from "react-yandex-maps";

export default function OneRoute({ user }) {
  const [reviews, setReviews] = useState([]);
  const [route, setRoute] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosInstance(`/routers/${id}`).then(({ data }) => {
      setRoute(data);
    });
  }, [id]);
  useEffect(() => {
    axiosInstance(`review/route/${id}`).then(({ data }) => {
      setReviews(data);
    });
  }, [id]);
  console.log(route);
  return (
    <Container
        style={{ width: "40rem", display: "flex", flexDirection: 'column', justifyContent: "center", gap: 20, marginTop: 40 }}
      >
      <FullCard user={user} route={route} />
      <ReviewForm />
      <Reviews reviews={reviews}/>
    </Container>
  );
}
