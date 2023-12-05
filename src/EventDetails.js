// Importing necessary modules
import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom'; // Make sure you've installed react-router-dom
import { useNavigate } from 'react-router-dom'; // Make sure you've installed react-router-dom

// Styled components
const EventDetailsContainer = styled.div`
  padding: 20px;
`;

const EventTitle = styled.h1`
  margin-bottom: 10px;
`;

const EventInfo = styled.p`
  margin-bottom: 5px;
`;

const AttendanceCheckbox = styled.input`
  margin-right: 10px;
`;

const AttendeeCount = styled.span`
  display: block;
  margin-top: 10px;
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

// Event Details Page Component
const EventDetails = ({ }) => {
  const navigate = useNavigate();

  const location = useLocation();
  const event = location.state?.event; // Using optional chaining

  console.log(event);
  // Assuming `event` is an object passed as a prop to this component
  // Example: { name: "Event Name", category: "Category", description: "Description", location: "Location", maxAttendees: 100, currentAttendees: 50 }
console.log(event);
  const [isAttending, setIsAttending] = useState(false);
  const [attendeeCount, setAttendeeCount] = useState(event.numAttending);

  const handleAttendanceChange = () => {
    setIsAttending(!isAttending);
    setAttendeeCount(isAttending ? attendeeCount - 1 : attendeeCount + 1);
  };

  return (
    <EventDetailsContainer>
      <EventTitle>{event.name}</EventTitle>
      <EventInfo>Category: {event.category}</EventInfo>
      <EventInfo>Description: {event.description}</EventInfo>
      <EventInfo>Address: {event.address}</EventInfo>
      <div>
        <AttendanceCheckbox 
          type="checkbox" 
          checked={isAttending} 
          onChange={handleAttendanceChange} 
        />
        Attending this event?
      </div>
      <AttendeeCount>
        Attendees: {attendeeCount}/{event.maxAttendees}
      </AttendeeCount>
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </EventDetailsContainer>
  );
};

export default EventDetails;
