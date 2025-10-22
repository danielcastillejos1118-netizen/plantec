import { Link, useLocation } from "react-router-dom";
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
    const location = useLocation();
    const currentPath = location.pathname;
    const isActive = (path) => currentPath === path;

    return (
        <div className="navbar">
            {/* Inicio */}
            <div className="nav-item">
                <Link to="/home">
                    <img
                        src={isActive("/home") ? homeActive : homeDefault}
                        alt="Home"
                    />
                    <p>Inicio</p>
                </Link>
            </div>

            {/* Comunidades */}
            <div className="nav-item">
                <Link to="/comunidades">
                    <img
                        src={isActive("/comunidades") ? comunityActive : comunityDefault}
                        alt="Comunidades"
                    />
                    <p>Comunidades</p>
                </Link>
            </div>

            {/* Crear publicación (puede abrir modal luego) */}
            <div className="nav-item">
                <Link to="/create-post">
                    <img src={addDefault} alt="Crear" />
                    <p>Crear</p>
                </Link>
            </div>

            {/* Chatbot */}
            <div className="nav-item">
                <Link to="/chatbot">
                    <img
                        src={isActive("/chatbot") ? chatActive : chatDefault}
                        alt="Chatbot"
                    />
                    <p>Chatbot</p>
                </Link>
            </div>

            {/* Tareas */}
            <div className="nav-item">
                <Link to="/tareas">
                    <img
                        src={isActive("/tareas") ? calendarActive : calendarDefault}
                        alt="Tareas"
                    />
                    <p>Tareas</p>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
