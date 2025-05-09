import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import Home from './components/Home';
import PlanetDiscoveryFacility from './PlanetDiscoveryFacility';
import PlanetOrbitalPeriod from './PlanetOrbitalPeriod';
import PlanetMass from './PlanetMass';
import AboutMe from './AboutMe';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef } from 'react';
import { Bar } from 'react-chartjs-2';


const App = () => {
  return (
    <div>
      <AppNavbar />
      <div className="container mt-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facility" element={<PlanetDiscoveryFacility />} />
        <Route path="/orbital-period" element={<PlanetOrbitalPeriod />} />
        <Route path="/mass" element={<PlanetMass />} />
        <Route path="/about" element={<AboutMe />} />
      </Routes>
      </div>
      </div>
  );
}

export default App


