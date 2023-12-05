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

  const handleSubmit = () => {
    addEvent(eventData); // Implement this function to add the event to your events array
    navigate('/eventList'); // Redirect to the event list page
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
    <Form onSubmit={handleSubmit}>
      <Input 
        type="text" 
        placeholder="Event Title" 
        value={eventData.title} 
        onChange={e => setEventData({ ...eventData, title: e.target.value })} 
      />
      <TextArea 
        placeholder="Description" 
        value={eventData.description} 
        onChange={e => setEventData({ ...eventData, description: e.target.value })} 
      />
      {/* <Autocomplete onSelect={handlePlaceSelect}> */}
        <Input 
          type="text" 
          placeholder="Location" 
          value={eventData.location} 
        />
      {/* </Autocomplete> */}
      <Input 
        type="date" 
        value={eventData.date} 
        onChange={e => setEventData({ ...eventData, date: e.target.value })} 
      />
      <Input 
        type="time" 
        value={eventData.time} 
        onChange={e => setEventData({ ...eventData, time: e.target.value })} 
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
            checked={eventData.isPublic} 
            onChange={e => setEventData({ ...eventData, isPublic: e.target.checked })} 
          />
          Public
        </Label>
        <Label>
          <Input 
            type="checkbox" 
            checked={!eventData.isPublic} 
            onChange={e => setEventData({ ...eventData, isPublic: !e.target.checked })} 
          />
          Friends Only
        </Label>
      </CheckboxContainer>
      <Button type="submit">Post Event</Button>
      <Button type="button" onClick={handleCancel}>Cancel</Button>
    </Form>
  );
};

export default AddEventPage;
