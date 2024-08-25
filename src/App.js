import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Login from './Components/Login';
import Slider from './Components/Slider';
import AuthProvider from './Helpers/AuthContext';
import './scss/app.scss';
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Slider />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
