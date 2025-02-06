import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './navbar';
import Home from './home';
import Dashboard from './dashboard';
import Map from './map';
import Reports from './reports';
import Profile from './profile';
import Team from './team';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/map" element={<Map />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/Team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
