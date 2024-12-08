import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import IconSideNav from './components/IconSideNav'; // Import the updated side nav
import Login from './components/Login';
import PlantDetails from './components/PlantDetails';
import WeatherMonitoring from './components/WeatherMonitoring';
import TaskScheduler from './components/TaskScheduler';
import ButtonAppBar from './components/ButtonAppBar';
import Chatbot from './components/Chatbot';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div>
      {!isLoginPage && <ButtonAppBar />}
      {!isLoginPage && <IconSideNav />} {/* Show the side navigation */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/plant-details" element={<PlantDetails />} />
        <Route path="/weather-monitoring" element={<WeatherMonitoring />} />
        <Route path="/task-scheduler" element={<TaskScheduler />} />
        <Route path="/Chatbot" element={<Chatbot />} />
      </Routes>
    </div>
  );
}

export default App;
