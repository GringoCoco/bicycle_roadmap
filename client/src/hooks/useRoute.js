import { useEffect, useState, useParams } from "react";
import axiosInstance from "../components/api/axiosInstance";

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
 