import { useState } from 'react';
import Cards from "./Cards.jsx";
import screenshot1 from "../../assets/img/dj.png";
import screenshot2 from "../../assets/img/objects.png";
import screenshot3 from "../../assets/img/glosa.png";
import { BrowserRouter, Routes, Route } from 'react-router';
import NavBar from "./NavBar.jsx";

function Home() {
  return (
    <>
        <div className="Home">
        <h1>My React App</h1>
            <h1>Hello world!</h1>
            <div className="home-card">
                <br />
                <p>lala lalala lala alalla la</p>
            </div>
        </div>
    </>
);
}

export default Home;