import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './Login';
import Profile from './Profile';
import Friends from './Friends';
import MyEvents from './MyEvents';
import EventList from './EventList';
import EventDetails from './EventDetails';
import EventMap from './EventMap';
import AddEvent from './AddEvent';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/friends" element={<Friends />} />
        <Route path="/myEvents" element={<MyEvents />} />
        <Route path="/eventList" element={<EventList />} />
        <Route path="/eventDetails" element={<EventDetails />} />
        <Route path="/eventMap" element={<EventMap />} />
        <Route path="/addEvent" element={<AddEvent />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}


export default App;
