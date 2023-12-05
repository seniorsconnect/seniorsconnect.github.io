// Importing necessary modules
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Make sure you've installed react-router-dom

// Styled components
const FriendsContainer = styled.div`
  padding: 20px;
`;

const FriendItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
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
    { name: "Friend 1", picture: "path-to-image-1.jpg" },
    { name: "Friend 2", picture: "path-to-image-2.jpg" },
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
