import { useEffect, useState } from "react";
import axiosInstance from "../components/api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

export default function useRoute() {
  const [route, setRoute] = useState([]);
  const { id } = useParams();
  console.log(id);
    
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance(`/routers/${id}`).then(({ data }) => {
      setRoute(data);
    });
  }, []);
  const deleteHandler = async () => {
    await axiosInstance.delete(`/routers/${route.id}`);
    navigate("/routers");
  };
  console.log(route);
  
  return {
    route,
  };
}
