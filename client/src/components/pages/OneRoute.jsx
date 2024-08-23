import React from "react";
import useRoute from "../../hooks/useRoute";
import FullCard from "../ui/FullCard";
import ReviewForm from "../ui/ReviewForm";
import ReviewAll from "../ui/ReviewAll";
// import ymaps from "react-yandex-maps";

export default function OneRoute() {
  const { route } = useRoute();

  return (
    <div>
      <FullCard route={route} />
      <ReviewForm />
      <ReviewAll />
    </div>
  );
}
