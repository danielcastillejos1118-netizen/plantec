import express from "express";
import pool from "../db.js";

const router = express.Router();

router.post("/ask", async(req, res) => {
    const { pregunta } = req.body;

    try {
        const result = await pool.query(
            "SELECT respuesta FROM chatbot_respuestas WHERE pregunta_clave ILIKE $1 LIMIT 1", [`%${pregunta}%`]
        );

        if (result.rows.length > 0) {
            res.json({ respuesta: result.rows[0].respuesta });
        } else {
            res.json({
                respuesta: "Lo siento, no tengo información sobre esa pregunta.",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Error al procesar la pregunta." });
    }
});

export default router;