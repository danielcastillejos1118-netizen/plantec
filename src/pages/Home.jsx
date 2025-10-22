import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Home.css";
import Navbar from "./Navbar";
import Post from "./PostElement";
import Header from "./Header";
import { Fragment } from "react";

function Home() {
  return (
    <Fragment>  
      <div className="home-container">
        <Header />
        <Post 
          id={1}
          userName="Pedro Pérez" 
          date="Hace 10 mins" 
          tittle="¿Cuál es la mejor estrategia para balancear estudios, vida social y sueño en la universidad?"
          body='Una de las cosas más difíciles al iniciar o avanzar en la universidad es encontrar el equilibrio perfecto (o al menos funcional) entre las exigencias académicas, mantener una vida social activa y, por supuesto, dormir lo suficiente.
          ¿Cuál ha sido tu estrategia personal para manejar este famoso "triángulo imposible" (Estudios - Amigos - Sueño)? ¿Priorizas el sueño y sacrificas salidas, o eres de los que quema pestañas por un buen rato con amigos o estudiando?
          ¡Comparte tus mejores consejos, trucos de productividad, o incluso tus mayores fallos para que todos podamos aprender!'
          likes={34}
          comments={12}
        ></Post>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Navbar />
    </Fragment>
  );
}

export default Home;