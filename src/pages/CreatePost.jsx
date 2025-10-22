import React, { useState } from "react";
import "./PostElement.css";
import { useNavigate } from "react-router-dom";

function CreatePost() {
    const [titulo, setTitulo] = useState("");
    const [contenido, setContenido] = useState("");
    const [idCategoria, setIdCategoria] = useState(1);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const usuario = JSON.parse(localStorage.getItem("usuario"));

        if (!usuario) {
            alert("Debes iniciar sesión para crear una publicación.");
            navigate("/login");
            return;
        }

        const nuevaPublicacion = {
            titulo,
            contenido,
            id_categoria: idCategoria,
            id_usuario: usuario.id,
        };

        try {
            // ✅ Ejemplo correcto
            const response = await fetch("https://plantec-backend.onrender.com/api/posts"
                , {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(nuevaPublicacion),
                });

            if (response.ok) {
                alert("✅ Publicación creada correctamente");
                navigate("/home");
            } else {
                const data = await response.json();
                console.error("❌ Error:", data);
                alert("Hubo un error al crear la publicación.");
            }
        } catch (error) {
            console.error("❌ Error de red:", error);
            alert("No se pudo conectar con el servidor.");
        }
    };

    return (
        <div className="create-post-container">
            <h2>Crear nueva publicación</h2>

            <form onSubmit={handleSubmit} className="create-post-form">
                <label>Título</label>
                <input
                    type="text"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                    placeholder="Escribe un título..."
                />

                <label>Contenido</label>
                <textarea
                    value={contenido}
                    onChange={(e) => setContenido(e.target.value)}
                    placeholder="Comparte algo con la comunidad..."
                ></textarea>

                <label>Categoría</label>
                <select
                    value={idCategoria}
                    onChange={(e) => setIdCategoria(e.target.value)}
                >
                    <option value="1">General</option>
                    <option value="2">TICs</option>
                    <option value="3">Industrial</option>
                    <option value="4">Logística</option>
                    <option value="5">Ferroviaria</option>
                    <option value="6">Gestión Empresarial</option>
                    <option value="7">Ambiental</option>
                </select>

                <button type="submit" className="btn-submit">
                    Publicar
                </button>
            </form>
        </div>
    );
}

export default CreatePost;
