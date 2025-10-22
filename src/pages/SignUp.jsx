import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { registerUser } from "../api/auth";
import "./SignUp.css";
import logo from "../assets/logo.jpg";

export default function SignUp() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({ nombre, correo, contrasena });
      setMensaje(data.message);
      setTimeout(() => navigate("/login"), 1500); // redirige al login después de 1.5s
    } catch (error) {
      setMensaje(error.error || "Error al registrarse");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <img src={logo} alt="Logo" className="logo" />
        <h2 className="titulo">Crear cuenta</h2>

        <form onSubmit={handleRegister}>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Crea una contraseña"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            required
          />

          <button type="submit" className="btn-signup">
            Registrarse
          </button>

          {mensaje && <p className="mensaje">{mensaje}</p>}

          <p className="login-link">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="link">
              Inicia sesión
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
