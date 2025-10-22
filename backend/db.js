import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: { rejectUnauthorized: false },
});

pool.connect()
    .then(() => console.log("✅ Conectado a la base de datos Neon"))
    .catch((err) => console.error("❌ Error al conectar con la base de datos:", err));