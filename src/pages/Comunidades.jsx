import React from "react";
import { useNavigate } from "react-router-dom";
import "./Comunidades.css";
import Navbar from "./Navbar";
import Header from "./Header";
import { Fragment } from "react";

export default function Comunidades() {
  const ir = useNavigate();

  const comunidades = [
    {
      nombre: "Ingeniería en Tecnologías de la Información y Comunicaciones",
      descripcion:
        "Espacio dedicado al análisis, desarrollo y administración de infraestructuras tecnológicas y sistemas de información.",
      imagen: "/imagenes/itic.png",
    },
    {
      nombre: "Ingeniería en Gestión Empresarial",
      descripcion:
        "Este espacio es un punto de encuentro para debatir sobre la optimización de procesos, la toma de decisiones estratégicas, la gestión de recursos humanos y la aplicación de modelos económicos.",
      imagen: "/imagenes/ige.png",
    },
    {
      nombre: "Ingeniería en Logística",
      descripcion:
        "Discutimos la optimización de inventarios, el transporte multimodal, el diseño de redes logísticas, el uso de tecnologías de trazabilidad y el análisis de la demanda.",
      imagen: "/imagenes/logistica.png",
    },
    {
      nombre: "Ingeniería en Industrial",
      descripcion:
        "Espacio dedicado al estudio de la optimización de sistemas productivos, procesos y recursos dentro de cualquier organización.",
      imagen: "/imagenes/industrial.png",
    },
    {
      nombre: "Ingeniería en Ambiental",
      descripcion:
        "Este foro está centrado en la aplicación de principios científicos y de ingeniería para la prevención, control y mitigación de problemas ambientales.",
      imagen: "/imagenes/ambiental.png",
    },
  ];

  return (
    <Fragment>
      <div className="contenedor-principal">  
        <Header />
  
        <h2 className="subtitulo">Todas las comunidades</h2>
  
        <div className="lista-comunidades">
          {comunidades.map((comunidad, i) => (
            <button key={i} className="tarjeta-comunidad">
              <img
                src={comunidad.imagen}
                alt={comunidad.nombre}
                className="imagen-comunidad"
              />
              <div className="info-comunidad">
                <h3 className="nombre-comunidad">{comunidad.nombre}</h3>
                <p className="descripcion-comunidad">{comunidad.descripcion}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
      <Navbar />
    </Fragment>
  );
}