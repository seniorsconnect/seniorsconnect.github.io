// Importing necessary modules
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you've installed react-router-dom

// Styled components
const EventListContainer = styled.div`
  padding: 20px;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  // center the search box
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`;


const EventItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc; /* Add a horizontal line between friend items */
  padding-bottom: 10px; /* Add padding below each friend item */
  width: 60%; /* Make sure the line spans the entire width */
  // center the event items
  margin-left: auto;
  margin-right: auto;
`;

const EventIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const EventName = styled.span`
  flex-grow: 1;
  font-weight: bold;
`;

const EventDistance = styled.span`
  margin-left: 10px;
  color: #666;
`;

const EventButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  margin-left: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Styled components
const NavBar = styled.nav`
  background-color: #9fc5e8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 25px;
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

// Assuming you'll replace 'IconPlaceholder' with actual icons
const IconPlaceholder = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #9fc5e8; // Placeholder style, replace with actual icons
`;

// EventList Page Component
const EventListPage = () => {
  const navigate = useNavigate(); // Moved up here
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Summer Music Festival",
      icon: "musicicon.png",
      date: "2023-08-15",
      time: "2:00 PM",
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
      icon: "articon.png",
      date: "2023-08-20",
      time: "1:00 PM",
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
      icon: "sporticon.png",
      date: "2023-09-05",
      time: "8:00 AM",
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
      icon: "chillicon.png",
      date: "2023-09-10",
      time: "9:00 AM",
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

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goToEventDetails = (event) => {
    navigate('/eventDetails', { state: { event } });
  };

  return (
    <EventListContainer>
      <NavBar>
        <NavTitle>SENIORSCONNECT</NavTitle>
        <div>
          <NavButton onClick={() => navigate("/eventList")}>EVENT LIST</NavButton>
          <NavButton onClick={() => navigate("/eventMap")}>EVENT MAP</NavButton>
          <NavButton onClick={() => navigate("/profile")}>PROFILE</NavButton>
          <NavButton onClick={() => navigate("/addEvent")}>ADD EVENT</NavButton>
        </div>
      </NavBar>
      <SearchBar 
        type="text" 
        placeholder="Search events..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredEvents.map(event => (
        <EventItem key={event.id}>
          <EventIcon src={event.icon} alt= "event icon"/>
          <EventName>{event.name}</EventName>
          <div>
            <span>{event.date} at {event.time}</span>
          </div>
          <EventDistance>{event.distance}</EventDistance>
          <EventButton onClick={() => goToEventDetails(event)}>Details</EventButton>
        </EventItem>
      ))}
    </EventListContainer>
  );
};

export default EventListPage;