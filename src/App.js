import "./styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

export default function App() {
  const markers = [
    {
      geocode: [59.21359, 39.89041],
      popUp: "Золотой ключик"
    },
    {
      geocode: [59.2180065, 39.8823516],
      popUp: "Кинотеатр Ленком"
    },
    {
      geocode: [59.2173832, 39.8879246],
      popUp: "Рок-атрибутика, аниме-магазин"
    }
  ];

  const customIcon = new Icon({
    iconUrl: require("./assets/images/map-icon.png"),
    iconSize: [38, 38] //size of the icon
  });

  return (
    <MapContainer center={[59.22234, 39.882431]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>
            <h2>{marker.popUp}</h2>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
