import React, {useState} from "react";
import axios from 'axios';
import { Icon } from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Map() {

  let parkData = require('./data/skateboardParks.json');
  const [activePark, setActivePark] = useState(null);

   return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
 {(parkData.features || []).map(park => (
        <Marker
          key={park.properties.PARK_ID}
          position={[
            park.geometry.coordinates[1],
            park.geometry.coordinates[0]
          ]}
          onClick={() => {
            setActivePark(park);
          }}
        />
      ))} 
        </MapContainer>
    )
};