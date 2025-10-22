import express from "express";
import { pool } from "../db.js";

const router = express.Router();

// ✅ Crear publicación
router.post("/", async(req, res) => {
    try {
        const { titulo, contenido, id_categoria, id_usuario } = req.body;

        if (!titulo || !contenido || !id_categoria || !id_usuario) {
            return res.status(400).json({ error: "Faltan datos para crear la publicación" });
        }

        const result = await pool.query(
            `INSERT INTO publicaciones (titulo, contenido, id_categoria, id_usuario, fecha_publicacion)
       VALUES ($1, $2, $3, $4, NOW())
       RETURNING *`, [titulo, contenido, id_categoria, id_usuario]
        );

        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error("❌ Error al crear publicación:", error);
        res.status(500).json({ error: "Error al crear publicación" });
    }
});

// ✅ Obtener publicaciones
router.get("/", async(req, res) => {
    try {
        const result = await pool.query(`
      SELECT p.id_publicacion, p.titulo, p.contenido, p.id_categoria, p.fecha_publicacion,
             u.nombre AS autor
      FROM publicaciones p
      JOIN usuarios u ON p.id_usuario = u.id_usuario
      ORDER BY p.fecha_publicacion DESC;
    `);

        res.json(result.rows);
    } catch (error) {
        console.error("❌ Error al obtener publicaciones:", error);
        res.status(500).json({ error: "Error al obtener publicaciones" });
    }
});

export default router;