import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <div className="content">
        <h1>Bienvenido a Plantec</h1>
        <p>Tu plataforma para la gestión de plantas y jardinería.</p>
      </div>
    </div>
  );
}

export default Home;