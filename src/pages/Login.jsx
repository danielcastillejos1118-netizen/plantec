import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Login.css";
import logo from "../assets/logo.jpg";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Correo:", correo);
    console.log("Contraseña:", contrasena);
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src={logo} alt="Plantec logo" className="logo" />
        <h2 className="titulo">Plantec</h2>

        <form onSubmit={handleLogin}>
          <label>Correo electrónico</label>
          <input
            type="email"
            placeholder="Escribe tu dirección de correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            placeholder="Escribe tu contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />

          <div className="forgot">Olvidé mi contraseña</div>

          <button type="submit" className="btn-login">Iniciar sesión</button>
        </form>

        <p className="registro">
  ¿No tienes una cuenta?{" "}
  <Link to="/signup" className="text-blue-600 font-medium hover:underline">
    Registrarse
  </Link>
</p>
      </div>
    </div>
  );
}

export default Login;
