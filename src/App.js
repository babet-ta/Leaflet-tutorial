import "./styles.css";
import "leaflet/dist/leaflet.css";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon, DivIcon, point } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";

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

  const createCustomClusterIcon = (cluster) => {
    return new DivIcon({
      html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`, 
      // className: "custom-marker-cluster",
      iconSize: point(33, 33, true),
    })
  }

  return (
    <MapContainer center={[59.22234, 39.882431]} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MarkerClusterGroup
        chunkedLoading
        iconCreateFunction={createCustomClusterIcon}
      >

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>
            {marker.popUp}
          </Popup>
        </Marker>
      ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
