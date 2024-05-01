import './App.css';

import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import About from './components/about/About';
import Appointment from './components/appointment/Appointment';
import Contact from './components/contact/Contact';
import Dashboard from './components/dashboard/Dashboard';
import Home from './components/home/Home';
import Login from './components/login/Login';
import NavbarCOM from './components/navbar/Navbar';
import PubNavbar from './components/navbar/PubNavbar';
import Register from './components/patient/register';
import Gallery from './components/Gallery/Gallery';
import PatientModule from './PatientModule';
import DoctorModule from './DoctorModule';
import { useState } from 'react';
import config from '../config';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div className="App">
      <Router>
        {isLoggedIn ? <NavbarCOM /> : <PubNavbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/regPatient" element={<Register isLoggedIn={isLoggedIn} />} />
          <Route exact path="/patientModule/:id" element={<Dashboard />} />
          <Route exact path="/appointmentForm/:id" element={<Appointment />} />
          <Route path="/doctor" element={<DoctorModule />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
