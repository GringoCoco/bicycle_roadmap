import React, { useEffect, useState } from "react";

const useCommReit = (route_id) => {
  const [review, setReview] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      try {
        const response = await fetch(`/review/route/${route_id}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setReview(data);
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    };

    fetchReview();
  }, [route_id]);

  return { review, error };
};

export default useCommReit;
