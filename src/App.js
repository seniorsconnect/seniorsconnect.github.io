import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import Friends from './Friends';
import MyEvents from './MyEvents';
import EventList from './EventList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/myEvents" element={<MyEvents />} />
        <Route path="/eventList" element={<EventList />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}


export default App;
