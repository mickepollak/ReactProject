import { useState } from 'react';
import './App.css';
import Cards from "./components/Cards.jsx";
import screenshot1 from "../assets/img/dj.png";
import screenshot2 from "../assets/img/objects.png";
import screenshot3 from "../assets/img/glosa.png";
import { BrowserRouter, Routes, Route } from 'react-router';
import Home from './components/Home.jsx';
import Portfolio from './components/Portfolio.jsx';
import About from './components/About.jsx';
import NavBar from "./components/NavBar.jsx";
import { Navigate } from 'react-router'; 



function App() {
  return (
    <>
    
      <BrowserRouter>
        <NavBar />
        <br />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
