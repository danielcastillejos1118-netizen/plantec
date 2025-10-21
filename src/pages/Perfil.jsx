import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Perfil.css";

const Perfil = () => {
  const [notificaciones, setNotificaciones] = useState(true);
  const navigate = useNavigate();

  return (
    <div className="perfil-container">
     
      <header className="perfil-header">
        <button
          className="back-button"
          aria-label="Regresar"
          onClick={() => navigate(-1)}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <h2 className="perfil-titulo">Perfil</h2>
        <div style={{ width: 36 }} aria-hidden></div>
      </header>

      <div className="perfil-card">
        <div className="perfil-info">
          <div className="perfil-foto"></div>
          <h3 className="perfil-nombre">NombrePerfil</h3>
          <p className="perfil-usuario">@NombrePerfil</p>
        </div>

        <div className="perfil-opciones">
          
          <button className="perfil-boton" onClick={() => console.log("Ir a cambiar nombre")}>
            <span>Cambiar nombre de usuario</span>
         
            <svg className="chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="perfil-toggle">
            <span>Notificaciones</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={notificaciones}
                onChange={() => setNotificaciones(!notificaciones)}
              />
              <span className="slider"></span>
            </label>
          </div>

          <button className="cerrar-sesion">Cerrar Sesión</button>
        </div>
      </div>
    </div>
  );
};

export default Perfil;
