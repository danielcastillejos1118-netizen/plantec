import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <img
          src="/logo.png"
          alt="Logo"
          className="logo"
        />
        <h2 className="titulo">Crear cuenta</h2>

        <form>
          <label htmlFor="nombre">Nombre completo</label>
          <input
            type="text"
            id="nombre"
            placeholder="Ingresa tu nombre completo"
            required
          />

          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            placeholder="Ingresa tu correo electrónico"
            required
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            placeholder="Crea una contraseña"
            required
          />

          <button type="submit" className="btn-signup">
            Registrarse
          </button>

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
