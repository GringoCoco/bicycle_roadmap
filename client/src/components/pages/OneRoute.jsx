import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../api/axiosInstance";
// import useRoute from "../../hooks/useRoute";
import FullCard from "../ui/FullCard";
import ReviewForm from "../ui/ReviewForm";
import Reviews from "../ui/Reviews";
// import ymaps from "react-yandex-maps";

<<<<<<< HEAD
export default function OneRoute() {
  const { route } = useRoute();
  console.log(route);
  

=======
export default function OneRoute( {user}) {
  // const { route } = useRoute();
  const [route, setRoute] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axiosInstance(`/routers/${id}`).then(({ data }) => {
      setRoute(data);
    });
  }, [id]);
  console.log(route);
>>>>>>> dev
  return (
    <div>
      <FullCard user={user} route={route} />
      <ReviewForm />
      <Reviews />
    </div>
  );
}
