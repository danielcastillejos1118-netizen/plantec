import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "../db.js";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

// Registro (SignUp)
router.post("/register", async(req, res) => {
    const { nombre, correo, contrasena } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const result = await pool.query(
            "INSERT INTO usuarios (nombre, correo, contrasena) VALUES ($1, $2, $3) RETURNING id_usuario, nombre, correo", [nombre, correo, hashedPassword]
        );

        res.status(201).json({
            message: "Usuario registrado correctamente",
            user: result.rows[0],
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al registrar usuario" });
    }
});

// Login
router.post("/login", async(req, res) => {
    const { correo, contrasena } = req.body;

    try {
        const result = await pool.query("SELECT * FROM usuarios WHERE correo = $1", [correo]);

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const usuario = result.rows[0];
        const isMatch = await bcrypt.compare(contrasena, usuario.contrasena);

        if (!isMatch) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        const token = jwt.sign({ id_usuario: usuario.id_usuario, correo: usuario.correo },
            process.env.JWT_SECRET, { expiresIn: "2h" }
        );

        res.json({
            message: "Inicio de sesión exitoso",
            token,
            usuario: {
                id: usuario.id_usuario,
                nombre: usuario.nombre,
                correo: usuario.correo,
            },
        });
    } catch (error) {
        console.error("❌ Error en registro:", error);
        res.status(500).json({ error: error.message || "Error al registrar usuario" });
        console.error(error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
});

export default router;