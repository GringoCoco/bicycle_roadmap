const calculateDistance = (point1, point2) => {
  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const [lat1, lon1] = point1;
  const [lat2, lon2] = point2;

  const R = 6371; // Радиус Земли в километрах

  const dLat = toRadians(lat2 - lat1);
  const dLon = toRadians(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) *
      Math.cos(toRadians(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  const distance = R * c; // Расстояние в километрах
  return distance;
};

export const calculateRouteLength = (points) => {
  let totalDistance = 0;

  for (let i = 0; i < points.length - 1; i++) {
    totalDistance += calculateDistance(points[i], points[i + 1]);
  }

  return totalDistance;
};
