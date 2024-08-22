import { useEffect, useState } from "react";
import axiosInstance from "../components/api/axiosInstance";

export default function useRoutes() {
  const [routes, setRoutes] = useState([]);

  useEffect(() => {
    axiosInstance('/routers').then(({ data }) => {
      setRoutes( data );
    });
  },[]);

  return {
   routes
  }
}

