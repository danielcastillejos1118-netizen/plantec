import { Link, useLocation } from 'react-router-dom';
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
  // Obtener la ruta actual
  const location = useLocation();
  const currentPath = location.pathname;

  // Función auxiliar para determinar si un enlace está activo
  const isActive = (path) => currentPath === path;

  return (
    <div className="navbar">
        <div className="nav-item">
            <Link to="/">
                <img src={isActive("/") ? homeActive : homeDefault} 
                    alt="Home" 
                />
                <p>Inicio</p>
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/comunidades">
                <img src={isActive("/comunidades") ? comunityActive : comunityDefault} 
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
            <Link to="/">
                <img src={isActive("/chatbot") ? chatActive : chatDefault} 
                    alt="Chatbot" 
                />
                <p>Chatbot</p>
            </Link>
        </div>
        <div className="nav-item">
            <Link to="/">
                <img src={isActive("/tareas") ? calendarActive : calendarDefault} 
                    alt="Calendar" 
                />
                <p>Tareas</p>
            </Link>
        </div>
    </div>
  );
}

export default Navbar;