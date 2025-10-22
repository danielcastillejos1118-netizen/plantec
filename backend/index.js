import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

// 🔹 Importar rutas
import authRoutes from "./routes/auth.js";
import ChatbotRoutes from "./routes/chatbotRoutes.js";
import postsRoutes from "./routes/posts.js";
import likesRoutes from "./routes/likes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Crear y exportar el pool UNA SOLA VEZ
export const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false },
});

// 🔹 Verificar conexión
pool.connect()
    .then(() => console.log("✅ Conectado a la base de datos Neon"))
    .catch((err) => console.error("❌ Error al conectar a Neon:", err));

// 🔹 Rutas principales
app.use("/api/auth", authRoutes);
app.use("/api/chatbot", ChatbotRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/likes", likesRoutes);

// 🔹 Ruta base
app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando correctamente y conectado a Neon");
});

// 🔹 Puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));