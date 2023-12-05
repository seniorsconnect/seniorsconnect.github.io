// Importing necessary modules
import styled from '@emotion/styled';
import React, { useState } from 'react';

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
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([
    // Include date and time in the event data
    { id: 1, name: "Event 1", date: "2023-07-01", time: "18:00", distance: "5.1mi", icon: "path-to-icon-1.jpg" },
    { id: 2, name: "Event 2", date: "2023-07-10", time: "20:00", distance: "10.2mi", icon: "path-to-icon-2.jpg" },
    // ... more events
  ]);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <EventListContainer>
      <SearchBar 
        type="text" 
        placeholder="Search events..." 
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {filteredEvents.map((event) => (
        <EventItem key={event.id}>
          <EventIcon src={event.icon} alt="Event Icon" />
          <EventName>{event.name}</EventName>
          {/* Displaying date and time */}
          <div>
            <span>{event.date} at {event.time}</span>
          </div>
          <EventDistance>{event.distance}</EventDistance>
          <EventButton>Details</EventButton>
        </EventItem>
      ))}
    </EventListContainer>
  );
};

export default EventListPage;
