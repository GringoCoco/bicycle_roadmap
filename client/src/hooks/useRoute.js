import { useEffect, useState } from "react";
import axiosInstance from "../components/api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

export default function useRoute(user) {
  const [route, setRoute] = useState([]);
  const { id } = useParams();
<<<<<<< HEAD
  console.log(id);
    
  const navigate = useNavigate();
=======
  
>>>>>>> dev

  useEffect(() => {
    axiosInstance(`/routers/${id}`).then(({ data }) => {
      setRoute(data);
    });
<<<<<<< HEAD
  }, []);
  const deleteHandler = async () => {
    await axiosInstance.delete(`/routers/${route.id}`);
    navigate("/routers");
  };
  console.log(route);
  
=======
  }, [id]);

>>>>>>> dev
  return {
    route,
  };
}
