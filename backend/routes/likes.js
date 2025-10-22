import express from "express";
import { pool } from "../index.js"; // ✅ Esta línea va aquí, justo después del import de express

const router = express.Router();

// 🟢 Dar o quitar like
router.post("/", async(req, res) => {
    try {
        const { id_usuario, id_publicacion } = req.body;

        if (!id_usuario || !id_publicacion) {
            return res.status(400).json({ error: "Faltan datos para el like" });
        }

        const check = await pool.query(
            "SELECT * FROM likes WHERE id_usuario = $1 AND id_publicacion = $2", [id_usuario, id_publicacion]
        );

        if (check.rows.length > 0) {
            await pool.query(
                "DELETE FROM likes WHERE id_usuario = $1 AND id_publicacion = $2", [id_usuario, id_publicacion]
            );
            return res.json({ liked: false });
        } else {
            await pool.query(
                "INSERT INTO likes (id_usuario, id_publicacion) VALUES ($1, $2)", [id_usuario, id_publicacion]
            );
            return res.json({ liked: true });
        }
    } catch (error) {
        console.error("❌ Error al manejar el like:", error);
        res.status(500).json({ error: "Error al manejar el like" });
    }
});

// 🟦 Obtener cantidad de likes de una publicación
router.get("/:id_publicacion", async(req, res) => {
    try {
        const { id_publicacion } = req.params;
        const result = await pool.query(
            "SELECT COUNT(*) AS total_likes FROM likes WHERE id_publicacion = $1", [id_publicacion]
        );
        res.json(result.rows[0]);
    } catch (error) {
        console.error("❌ Error al obtener likes:", error);
        res.status(500).json({ error: "Error al obtener likes" });
    }
});

export default router;