// Importing necessary modules
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you've installed react-router-dom

// Styled components
const EventsContainer = styled.div`
  padding: 20px;
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

const BackButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  background-color: #6c757d;
  color: white;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #5a6268;
  }
`;

// My Events Page Component
const MyEventsPage = () => {
  const navigate = useNavigate();

  const [events, setEvents] = useState([
    // Include date and time in the event data
    { id: 1, name: "Event 1", date: "2023-07-01", time: "18:00", icon: "path-to-icon-1.jpg" },
    { id: 2, name: "Event 2", date: "2023-07-10", time: "20:00", icon: "path-to-icon-2.jpg" },
    // ... more events
  ]);

  const removeEvent = (eventId) => {
    setEvents(events.filter(event => event.id !== eventId));
  };

  return (
    <EventsContainer>
      {events.map((event) => (
        <EventItem key={event.id}>
          <EventIcon src={event.icon} alt="Event Icon" />
          <EventName>{event.name}</EventName>
          {/* Displaying date and time */}
          <div>
            <span>{event.date} at {event.time}</span>
          </div>
          <EventButton onClick={() => removeEvent(event.id)}>No longer attending?</EventButton>
        </EventItem>
      ))}
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </EventsContainer>
  );
};

export default MyEventsPage;
