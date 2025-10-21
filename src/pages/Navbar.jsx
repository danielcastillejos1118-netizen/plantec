import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Navbar.css";
import homeActive from "../assets/home-sharp-blue.svg";
import homeDefault from "../assets/home-outline.svg";
import comunityDefault from "../assets/people-outline.svg";
import comunityActive from "../assets/people-sharp-blue.svg";
import addDefault from "../assets/add-circle-outline.svg";
import chatDefault from "../assets/chatbubbles-outline.svg";
import chatActive from "../assets/chatbubbles-sharp-blue.svg";
import calendarDefault from "../assets/calendar-outline.svg";
import calendarActive from "../assets/calendar-sharp-blue.svg";

function Navbar() {
  const [active, setActive] = useState("home");

  return (
    <div className="navbar">
        <div className="nav-item">
            <Link to="/" onClick={() => setActive("home")}>
                <img src={active === "home" ? homeActive : homeDefault} 
                    alt="Home" 
                />
                <p>Inicio</p>
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/" onClick={() => setActive("comunities")}>
                <img src={active === "comunities" ? comunityActive : comunityDefault} 
                    alt="Comuinity" 
                />
                <p>Comunidades</p>
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/">
                <img src={addDefault} 
                    alt="Add" 
                />
                <p>Crear</p>
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/" onClick={() => setActive("chatbot")}>
                <img src={active === "chatbot" ? chatActive : chatDefault} 
                    alt="Chatbot" 
                />
                <p>Chatbot</p>
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/" onClick={() => setActive("calendar")}>
                <img src={active === "calendar" ? calendarActive : calendarDefault} 
                    alt="Calendar" 
                />
                <p>Tareas</p>
            </Link>
        </div>
    </div>
  );
}

export default Navbar;