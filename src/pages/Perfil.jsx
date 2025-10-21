import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Perfil.css";

function Perfil() {
  const [activarNotificaciones, setActivarNotificaciones] = useState(true);
  const irAtras = useNavigate();

  return (
    <div className="contenedor-perfil">
      
      <header className="encabezado-perfil">
        <button className="boton-regresar" onClick={() => irAtras(-1)}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 18l-6-6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h2 className="titulo-perfil">Mi Perfil</h2>
        <div style={{ width: 30 }}></div>
      </header>

      <div className="tarjeta-perfil">
        <div className="info-perfil">
          <div className="foto-perfil"></div>
          <h3 className="nombre-perfil">PerfilNombre</h3>
          <p className="usuario-perfil">@PerfilNombre</p>
        </div>

        <div className="opciones-perfil">
          <button
            className="boton-opcion"
            onClick={() => console.log("Cambiar nombre")}
          >
            <span>Cambiar nombre de usuario</span>
            <svg
              className="flecha"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M9 18l6-6-6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="opcion-notificacion">
            <span>Notificaciones</span>
            <label className="interruptor">
              <input
                type="checkbox"
                checked={activarNotificaciones}
                onChange={() =>
                  setActivarNotificaciones(!activarNotificaciones)
                }
              />
              <span className="deslizador"></span>
            </label>
          </div>

          <button className="boton-cerrar">Cerrar sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;