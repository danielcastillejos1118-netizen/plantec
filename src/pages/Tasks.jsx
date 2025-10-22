import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ agregado
import "./Tasks.css";

export default function Tasks() {
  const [tarea, setTarea] = useState({
    titulo: "Tarea 1 Unidad 1",
    fecha: "Vence el 19 de octubre de 2025 23:59",
    instrucciones:
      "Investiga y describe los tres procesos funcionales principales (o pilares) de la Cadena de Suministro (S.C.M.). Para cada proceso, agrega tres ejemplos concretos de las actividades, métricas o herramientas que son cruciales para su gestión.",
    estado: "Sin entregar",
  });

  const navigate = useNavigate(); // ✅ agregado

  return (
    <div className="tareas-container">
      <header className="tareas-header">
        <span className="back-arrow" onClick={() => navigate("/home")}>
          ←
        </span>
        <h2>Asignación</h2>
        <img
          src="https://via.placeholder.com/35"
          alt="Perfil"
          className="perfil"
        />
      </header>

      <main className="tareas-content">
        <h3 className="tarea-titulo">{tarea.titulo}</h3>
        <p className="tarea-fecha">{tarea.fecha}</p>

        <h4 className="instrucciones-titulo">Instrucciones:</h4>
        <p className="tarea-descripcion">{tarea.instrucciones}</p>

        <div className="tarea-footer">
          <p className="tarea-estado">{tarea.estado}</p>
          <button className="btn-recordatorio">Recordatorio</button>
        </div>
      </main>
    </div>
  );
}

