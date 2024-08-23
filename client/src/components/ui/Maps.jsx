import React, { useEffect, useState } from "react";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";
import useStore from "../../store/store";

const Maps = () => {
  const [points, setPoints] = useState([]);
  const { inc } = useStore();
  
  useEffect(() => {
    inc(points);
  }, [points, inc]);

  const handleMapClick = (event) => {
    const coords = event.get("coords");
    if (points.length < 2) {
      setPoints([...points, coords]); // Добавляем точку, если их меньше двух
    }
  };

  const handleClear = () => {
    setPoints([]); // Очищаем точки
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
      <button type="button" onClick={handleClear}>
        Очистить точки
      </button>
    </YMaps>
  );
};

export default Maps;
