import React, { useState } from 'react';
import styled from '@emotion/styled';

const Title = styled.h1`
  margin-bottom: 30px; // Add some space below the title
  color: #007bff; // You can change the color to fit your theme
  font-size: 2.5rem; // Large font size for visibility
  text-align: center;
`;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f2f2f2;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px; // Larger font size
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const ToggleButton = styled.button`
  margin-top: 20px; // Add space above the button
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

const Login = () => {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleToggle = () => setIsRegistering(!isRegistering);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const endpoint = isRegistering ? '/register' : '/login';
    const url = `http://localhost:3001${endpoint}`;
  
    try {
      // Using fetch
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      // const data = await response.json();
      console.log(response);
  
      if (response.ok) {
        console.log(response);
        // Successful response handling
        // alert(data.message || 'Success!'); // Replace with a more user-friendly approach
        // For instance, redirect to a different page or update the UI accordingly
      } else {
        // Unsuccessful response handling
        // alert(data.error || 'An error occurred'); // Replace with a more user-friendly approach
        // Update the UI to show the error message
        console.log("oopsies");
      }
    } catch (error) {
      console.log("oops");
      // Network error handling
      alert('Network error, please try again later.'); // Replace with a more user-friendly approach
      // Update the UI to inform the user of the network error
    }
  };  


  

  return (
    
    <Container>
      <Title>Seniors Connect</Title>
      <LoginForm onSubmit={handleSubmit}>
        <Input 
          type="text" 
          placeholder="Username" 
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Password" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">{isRegistering ? 'Register' : 'Log In'}</Button>
      </LoginForm>
      <ToggleButton onClick={handleToggle}>
        {isRegistering ? 'Already have an account? Log In' : 'Create an account'}
      </ToggleButton>
    </Container>
  );
};

export default Login;