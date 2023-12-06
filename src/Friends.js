// Importing necessary modules
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you've installed react-router-dom

// Styled components
const FriendsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  border-bottom: 1px solid #ccc; /* Add a horizontal line between friend items */
  padding-bottom: 10px; /* Add padding below each friend item */
  width: 30%; /* Make sure the line spans the entire width */
`;

const FriendPicture = styled.img`
  border-radius: 50%;
  width: 50px;
  height: 50px;
  object-fit: cover;
  margin-right: 10px;
`;

const FriendName = styled.span`
  flex-grow: 1;
  font-weight: bold;
`;

const DetailsButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
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

// Friends Page Component
const Friends = () => {
  const navigate = useNavigate();

  const friends = [
    // Replace with actual friend data
    { name: "Will Smith", picture: "willsmith.png" },
    { name: "Angelina Jolie", picture: "angelinajolie.png" },
    { name: "Tom Hanks", picture: "tomhanks.png" },
    { name: "Vin Diesel", picture: "vindiesel.png" },
    // ... more friends
  ];

  return (
    <FriendsContainer>
      {friends.map((friend, index) => (
        <FriendItem key={index}>
          <FriendPicture src={friend.picture} alt={friend.name} />
          <FriendName>{friend.name}</FriendName>
          <DetailsButton>Details</DetailsButton>
        </FriendItem>
      ))}
      <BackButton onClick={() => navigate(-1)}>Back</BackButton>
    </FriendsContainer>
  );
};

export default Friends;
