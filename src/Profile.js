// Importing necessary modules
import styled from '@emotion/styled';
import React from 'react';
import { useNavigate } from 'react-router-dom';


// Styled components
const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const ProfilePicture = styled.img`
  border-radius: 50%;
  width: 150px;
  height: 150px;
  object-fit: cover;
`;

const Name = styled.h1`
  margin: 10px 0;
`;

const Info = styled.p`
  margin: 5px 0;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

// Profile Page Component
const Profile = () => {
  const navigate = useNavigate();
  return (
    <ProfileContainer>
      <ProfilePicture src="./tom_cruise3.jpg" alt="Profile" />
      <Name>Tom Cruise</Name>
      <Info>Age: 61</Info>
      <Info>Beverly Hills, CA</Info>
      <Info>Hobbies: Acting, Stunt Work, Performing very hard missions</Info>
      <Button onClick={() => navigate("/friends")}>
        Friends
      </Button>
      <Button onClick={() => navigate("/myEvents")}>
        My Events
      </Button>
    </ProfileContainer>
  );
};

export default Profile;
