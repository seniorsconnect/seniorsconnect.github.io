// Importing necessary modules
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you've installed react-router-dom

// Styled components
const EventsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EventItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc; /* Add a horizontal line between friend items */
  padding-bottom: 10px; /* Add padding below each friend item */
  width: 50%; /* Make sure the line spans the entire width */
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

const EventButton = styled.button`
  padding: 5px 10px;
  padding-right: 10px;
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
    { id: 1, name: "Golf Outing", date: "2023-07-01", time: "6:00 PM", icon: "sporticon.png" },
    { id: 2, name: "Bingo", date: "2023-07-10", time: "2:30 PM", icon: "gameicon.png" },
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
