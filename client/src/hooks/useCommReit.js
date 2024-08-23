import  { useEffect, useState } from "react";
import axiosInstance from "../components/api/axiosInstance";
import {useParams} from "react-router-dom"

export default function useCommReit() {
// const useCommReit = (route_id) => {
  const [review, setReview] = useState([]);
  const { id } = useParams();
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchReview = async () => {


    useEffect(() => {
      axiosInstance(`/routers/review/route/${id}`).then(({ data }) => {
        setReview( data );
      });
    }, [id]);
      // try {
      //   const response = await fetch(`/review/route/${route_id}`);
      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }
      //   const data = await response.json();
      //   setReview(data);
      // // } catch (error) {
      //   console.error(error);
      //   setError(error.message);
      // }
    // };

  //   fetchReview();
  // }, [route_id]);

  return { review };
};

// export default useCommReit;
