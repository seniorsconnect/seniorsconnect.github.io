const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3001; // Ensure this port is different from your React app's port

const cors = require('cors');

// Enable CORS for all routes and origins
app.use(cors({
  origin: 'http://localhost:3000' // Replace with the URL of your frontend
}));

app.use(bodyParser.json());

// In-memory storage for simplicity; replace with a database in production
let users = {}; 

// Load existing users (if any) at server start
if (fs.existsSync('users.json')) {
  users = JSON.parse(fs.readFileSync('users.json', 'utf8'));
}

// Endpoint to handle user registration
app.post('/register', (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;
  console.log(users[username]);
  if (users[username]) {
    console.log('User already exists');
    return res.status(400).send('User already exists');
  }
  users[username] = password;
  fs.writeFileSync('users.json', JSON.stringify(users));
  //make sure that a successful registration returns a 200 status code
  console.log("We made it here!")
  res.status(200).send('User registered successfully');
});

// Endpoint to validate login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (users[username] && users[username] === password) {
    //make sure that a successful login returns a 200 status code
    res.status(200).send('Login successful');
    console.log('Login successful');
  } else {
    res.status(401).send('Invalid credentials');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
