import React from "react";
import { YMaps, Map, Placemark, Polyline } from "@pbe/react-yandex-maps";

const Maps = ({ bdPoints }) => {
  return (
    <YMaps>
      <Map
        defaultState={{ center: [55.751244, 37.618423], zoom: 10 }} // Центр и масштаб карты
        width="100%"
        height="500px"
      >
        {bdPoints.map((point, index) => (
          <Placemark
            key={index}
            geometry={point}
            properties={{
              hintContent: `Точка ${index + 1}`, // Подсказка при наведении на метку
            }}
            options={{
              preset: "islands#redIcon", // Внешний вид метки
            }}
          />
        ))}

        {/* Если есть хотя бы две точки, строим маршрут */}
        {bdPoints.length > 1 && (
          <Polyline
            geometry={bdPoints}
            options={{
              strokeColor: "#1E90FF", // Цвет линии маршрута
              strokeWidth: 5, // Ширина линии маршрута
              strokeOpacity: 0.8, // Прозрачность линии маршрута
            }}
          />
        )}
      </Map>
    </YMaps>
  );
};

export default Maps;
