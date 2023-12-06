import styled from '@emotion/styled';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { Autocomplete } from '@react-google-maps/api';

// Styled components
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
  padding: 20px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const CheckboxContainer = styled.div`
  margin-bottom: 20px;
`;

const Label = styled.label`
  margin-right: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  background-color: #007bff;
  color: white;

  &:hover {
    background-color: #0056b3;
  }
`;

const options = [
  { value: 'art', label: 'Art' },
  { value: 'chill', label: 'Chill' },
  { value: 'games', label: 'Games' },
  { value: 'movie', label: 'Movie' },
  { value: 'music', label: 'Music' },
  { value: 'sports', label: 'Sports' }
];

// Styled components
const NavBar = styled.nav`
  background-color: #9fc5e8;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  margin-bottom: 25px;
  margin-left: 40px;
  width: 90%;
  margin-top: 25px;
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

// Add Event Page Component
const AddEventPage = ({ addEvent }) => {
  const navigate = useNavigate();
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    location: '',
    date: '',
    time: '',
    isPublic: true,
    latitude: null,
    longitude: null
  });

  const handlePlaceSelect = (place) => {
    setEventData({
      ...eventData,
      location: place.formatted_address,
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng()
    });
  };

  const handleCancel = () => {
    navigate(-1); // Go back to the previous page
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setEventData({ ...eventData, category: selectedOption.value });
  };

  return (
    <div>
      <NavBar>
        <NavTitle>SENIORSCONNECT</NavTitle>
        <div>
          <NavButton onClick={() => navigate("/eventList")}>EVENT LIST</NavButton>
          <NavButton onClick={() => navigate("/eventMap")}>EVENT MAP</NavButton>
          <NavButton onClick={() => navigate("/profile")}>PROFILE</NavButton>
          <NavButton onClick={() => navigate("/addEvent")}>ADD EVENT</NavButton>
        </div>
      </NavBar>
    <Form>
      <Input 
        type="text" 
        placeholder="Event Title" 
      />
      <TextArea 
        placeholder="Description" 
      />
      <Input 
        placeholder="Address" 
      />
      <Input 
        placeholder="Date"
        type="date" 
      />
      <Input 
        type="time" 
      />
      <Select 
        options={options} 
        value={selectedCategory}
        onChange={handleCategoryChange} 
        placeholder="Select Category"
      />
      <CheckboxContainer>
        <Label>
          <Input 
            type="checkbox" 
          />
          Public
        </Label>
        <Label>
          <Input 
            type="checkbox" 
          />
          Friends Only
        </Label>
      </CheckboxContainer>
      <Button>Post Event</Button>
      <br />
      <Button type="button" onClick={handleCancel}>Cancel</Button>
    </Form>
    </div>
  );
};

export default AddEventPage;