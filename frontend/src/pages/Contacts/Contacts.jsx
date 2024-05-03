import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Contacts.css";

function Contacts() {
  // Fictional coordinates in the middle of the ocean
  const India = [22, 73];

  return (
    <div className="contacts">
      <div className="contacts-info">
        <h2>Contact Information</h2>
        <p>Email: abcd@gmail.com</p>
        <p>Phone: +91 9876543210</p>
        <p>Address: Lorem ipsum dolor sit amet.</p>
        <p>India</p>
      </div>

      <div className="hr-vertical"></div>

      <div className="location">
        <h2>Location</h2>
        <MapContainer
          center={India}
          zoom={2}
          style={{ width: "600px", height: "350px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={India}>
            <Popup>Fictional Location</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}

export default Contacts;
