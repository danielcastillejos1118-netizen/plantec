import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pg from "pg";

import authRoutes from "./routes/auth.js";
import ChatbotRoutes from "./routes/chatbotRoutes.js";
import postsRoutes from "./routes/posts.js";
import likesRoutes from "./routes/likes.js";

dotenv.config();

const app = express();

// ✅ Configuración CORS actualizada
const allowedOrigins = [
    "https://plantec-pi.vercel.app", // tu frontend en Vercel
    "http://localhost:3000" // para desarrollo local
];

app.use(
    cors({
        origin: allowedOrigins,
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
        credentials: true,
    })
);

app.use(express.json());

// Conexión a Neon
const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false },
});

pool.connect()
    .then(() => console.log("✅ Conectado a Neon"))
    .catch((err) => console.error("❌ Error al conectar a Neon:", err));

// Rutas
app.use("/api/auth", authRoutes);
app.use("/api/chatbot", ChatbotRoutes);
app.use("/api/posts", postsRoutes);
app.use("/api/likes", likesRoutes);

app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando correctamente con CORS configurado");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

export default pool;