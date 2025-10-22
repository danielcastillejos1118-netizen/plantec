import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Perfil.css";

function Perfil() {
  const [activarNotificaciones, setActivarNotificaciones] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Debes iniciar sesión para ver tu perfil.");
          navigate("/login");
          return;
        }

        const res = await fetch("http://localhost:5000/api/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        if (res.ok) {
          setUsuario(data.usuario);
        } else {
          console.error("❌ Error al obtener usuario:", data.error);
        }
      } catch (error) {
        console.error("⚠️ Error de conexión:", error);
      }
    };

    fetchUsuario();
  }, [navigate]);

  const handleCerrarSesion = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!usuario) return <p>Cargando perfil...</p>;

  return (
    <div className="contenedor-perfil">
      <header className="encabezado-perfil">
        <button className="boton-regresar" onClick={() => navigate(-1)}>
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
          <h3 className="nombre-perfil">{usuario.nombre}</h3>
          <p className="usuario-perfil">@{usuario.correo.split("@")[0]}</p>
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

          <button className="boton-cerrar" onClick={handleCerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
}

export default Perfil;

