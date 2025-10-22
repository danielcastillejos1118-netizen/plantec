import React, { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const usuario = JSON.parse(localStorage.getItem("usuario"));

  // 🌐 URL base de tu backend en Render
  const API_BASE = "https://plantec-backend.onrender.com/api";

  // 🔹 Cargar publicaciones
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${API_BASE}/posts`);
        const data = await response.json();

        if (Array.isArray(data)) {
          // 🔹 Traer también la cantidad de likes por publicación
          const postsConLikes = await Promise.all(
            data.map(async (post) => {
              try {
                const res = await fetch(`${API_BASE}/likes/${post.id_publicacion}`);
                const likesData = await res.json();
                return {
                  ...post,
                  likes: parseInt(likesData.total_likes || 0),
                };
              } catch {
                return { ...post, likes: 0 };
              }
            })
          );
          setPosts(postsConLikes);
        } else {
          console.warn("⚠️ El backend no devolvió un array:", data);
        }
      } catch (error) {
        console.error("❌ Error al obtener publicaciones:", error);
      }
    };

    fetchPosts();
  }, []);

  // ❤️ Función para dar/quitar like
  const toggleLike = async (id_publicacion) => {
    if (!usuario) {
      alert("Debes iniciar sesión para dar like.");
      return;
    }

    try {
      const response = await fetch(`${API_BASE}/likes`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id_usuario: usuario.id,
          id_publicacion,
        }),
      });

      const result = await response.json();

      // 🔄 Actualiza el contador visualmente
      setPosts((prev) =>
        prev.map((p) =>
          p.id_publicacion === id_publicacion
            ? { ...p, likes: result.liked ? p.likes + 1 : p.likes - 1 }
            : p
        )
      );

      // 💙 Cambiar estado del botón
      setLikedPosts((prev) =>
        result.liked
          ? [...prev, id_publicacion]
          : prev.filter((id) => id !== id_publicacion)
      );
    } catch (error) {
      console.error("❌ Error al dar like:", error);
    }
  };

  // 📱 Renderizado visual
  return (
    <div className="home-container">
      <h2>📢 Publicaciones Recientes</h2>

      {posts.length === 0 ? (
        <p>No hay publicaciones aún.</p>
      ) : (
        posts.map((post) => (
          <div key={post.id_publicacion} className="post-card">
            <h3>{post.titulo}</h3>
            <p>{post.contenido}</p>

            <div className="post-footer">
              <span>👤 {post.autor}</span>
              <span>
                📅 {new Date(post.fecha_publicacion).toLocaleDateString()}
              </span>
            </div>

            <button
              className={`like-button ${likedPosts.includes(post.id_publicacion) ? "liked" : ""
                }`}
              onClick={() => toggleLike(post.id_publicacion)}
            >
              ❤️ {post.likes}
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
