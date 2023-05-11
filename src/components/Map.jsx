import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <MapContainer center={[37.174276577564704, -3.606496920860222]} zoom={16} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[37.174276577564704, -3.606496920860222]}>
        <Popup>
          <p>Slide Ink Studio</p>
          <p>Calle Obispo Hurtado, 18</p>
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Map;
