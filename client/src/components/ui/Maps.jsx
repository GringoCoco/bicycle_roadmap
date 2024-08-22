import React, { useState } from "react";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import axiosInstance from "../api/axiosInstance";
import  useStore  from "../../store/store";

const Maps = () => {
  const [points, setPoints] = useState([]);
  const { inc } = useStore();

  const handleMapClick = (event) => {
    const coords = event.get("coords");
    if (points.length < 2) {
      setPoints([...points, coords]);
    } else {
      setPoints([points[1], coords]);
    }
    inc(points);
  };
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.751244, 37.618423], zoom: 10 }}
        width="100%"
        height="500px"
        onClick={handleMapClick}
      >
        {points.map((point, index) => (
          <Placemark key={index} geometry={point} />
        ))}

        {points.length === 2 && (
          <Polyline
            geometry={points}
            options={{
              strokeColor: "#1E90FF",
              strokeWidth: 5,
              strokeOpacity: 0.8,
            }}
          />
        )}
      </Map>
    </YMaps>
  );
};

export default Maps;
