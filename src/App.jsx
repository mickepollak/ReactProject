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



function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/components/Home" element={<Home />} />
          <Route path="/components/About" element={<About />} />
          <Route path="/components/Portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
