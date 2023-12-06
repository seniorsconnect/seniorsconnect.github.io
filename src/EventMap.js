import React from 'react';
import styled from '@emotion/styled';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const center = [34.0736, -118.4004]; // Central coordinates for the map

// Custom icon
const blueIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + '/poi_blank_blue.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Styled components
const NavBar = styled.nav`
  background-color: #9fc5e8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 25px;
  margin-left: 40px;
  width: 90%;
  margin-top: 25px;
`;

const NavTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const NavButton = styled.button`
  background: none;
  border: none;
  color: white;
  cursor: pointer;
  padding: 5px;
  margin: 0 10px;

  &:hover {
    color: #ddd;
  }
`;

const EventMap = ({}) => {
  const navigate = useNavigate();
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Summer Music Festival",
      date: "2023-08-15",
      time: "14:00",
      distance: "3.2mi",
      category: "Music",
      description: "An outdoor summer music festival featuring a variety of artists and bands.",
      numAttending: 150,
      maxAttendees: 200,
      address: "123 Festival Ave, Music City",
      longitude: 34.0736,
      latitude: -118.4004
    },
    {
      id: 2,
      name: "Local Art Exhibition",
      date: "2023-08-20",
      time: "10:00",
      distance: "5.5mi",
      category: "Art",
      description: "Exhibition showcasing local artists with a range of contemporary and traditional artwork.",
      numAttending: 80,
      maxAttendees: 100,
      address: "456 Art St, Downtown",
      longitude: 34.0818,
      latitude: -118.4134
    },
    {
      id: 3,
      name: "Charity Run 5K",
      date: "2023-09-05",
      time: "08:00",
      distance: "10mi",
      category: "Sports",
      description: "A 5K run to raise funds for local charities, suitable for all ages and abilities.",
      numAttending: 200,
      maxAttendees: 300,
      address: "789 Charity Rd, Riverside Park",
      longitude: 34.0381,
      latitude: -118.6923
    },
    {
      id: 4,
      name: "Tech Conference 2023",
      date: "2023-09-10",
      time: "09:00",
      distance: "12mi",
      category: "Technology",
      description: "Annual tech conference with guest speakers, workshops, and networking opportunities.",
      numAttending: 300,
      maxAttendees: 500,
      address: "101 Tech Blvd, Innovation City",
      longitude:34.3872,
      latitude: -118.123
    },
    // ... add more events as needed
  
]);

const goToEventDetails = (event) => {
  navigate('/eventDetails', { state: { event } });
};

  return (
    <div>
      <NavBar>
        <NavTitle>SENIORSCONNECT</NavTitle>
        <div>
          <NavButton onClick={() => navigate("/eventList")}>EVENT LIST</NavButton>
          <NavButton onClick={() => navigate("/eventMap")}>EVENT MAP</NavButton>
          <NavButton onClick={() => navigate("/profile")}>PROFILE</NavButton>
          <NavButton onClick={() => navigate("/addEvent")}>ADD EVENT</NavButton>
        </div>
      </NavBar>
      <MapContainer center={center} zoom={13} style={{ height: '800px', width: '100%'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {events.map(event => (
          <Marker
            key={event.id}
            position={[event.longitude, event.latitude]} // Replace with actual event coordinates
            icon={blueIcon}
            eventHandlers={{
              click: () => {
                goToEventDetails(event);
              },
            }}
          >
            <Popup>{event.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default EventMap;