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
  font-weight: bold;
`;

const Button = styled.button`
  margin: 10px;
  padding: 10px 20px;
  width: 150px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;


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

// Profile Page Component
const Profile = () => {
  const navigate = useNavigate();
  return (
    <ProfileContainer>
      <NavBar>
        <NavTitle>SENIORSCONNECT</NavTitle>
        <div>
          <NavButton onClick={() => navigate("/eventList")}>EVENT LIST</NavButton>
          <NavButton onClick={() => navigate("/eventMap")}>EVENT MAP</NavButton>
          <NavButton onClick={() => navigate("/profile")}>PROFILE</NavButton>
          <NavButton onClick={() => navigate("/addEvent")}>ADD EVENT</NavButton>
        </div>
      </NavBar>
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