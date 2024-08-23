import { useEffect, useState } from "react";
import axiosInstance from "../components/api/axiosInstance";
import { useParams } from "react-router-dom";

export default function useRoute() {
  const [route, setRoute] = useState([]);
  const { id } = useParams();

    useEffect(() => {
    axiosInstance(`/routers/${id}`).then(({ data }) => {
      setRoute( data );
    });
  }, [id]);
  return {
    route
   }
 }
 