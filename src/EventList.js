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
`;

const EventItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

const EventIcon = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const EventName = styled.span`
  flex-grow: 1;
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

// EventList Page Component
const EventListPage = () => {
  const navigate = useNavigate(); // Moved up here
  const [searchQuery, setSearchQuery] = useState('');
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

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const goToEventDetails = (event) => {
    navigate('/eventDetails', { state: { event } });
  };

  return (
    <EventListContainer>
      <SearchBar 
        type="text" 
        placeholder="Search events..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredEvents.map(event => (
        <EventItem key={event.id}>
          <EventIcon src={event.icon} alt="Event Icon" />
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