import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../db.js"; // ✅ CORREGIDO
import dotenv from "dotenv";

dotenv.config();
const router = express.Router(); // ⬅️ DECLARADO AQUÍ

// 🧩 Registro (SignUp)
router.post("/register", async(req, res) => {
    const { nombre, correo, contrasena } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const result = await pool.query(
            "INSERT INTO usuarios (nombre, correo, contrasena) VALUES ($1, $2, $3) RETURNING id_usuario, nombre, correo", [nombre, correo, hashedPassword]
        );

        res.status(201).json({
            message: "✅ Usuario registrado correctamente",
            user: result.rows[0],
        });
    } catch (error) {
        console.error("❌ Error al registrar usuario:", error);
        res.status(500).json({ error: "Error al registrar usuario" });
    }
});

// 🔐 Inicio de sesión (Login)
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
            message: "✅ Inicio de sesión exitoso",
            token,
            usuario: {
                id: usuario.id_usuario,
                nombre: usuario.nombre,
                correo: usuario.correo,
            },
        });
    } catch (error) {
        console.error("❌ Error al iniciar sesión:", error);
        res.status(500).json({ error: "Error al iniciar sesión" });
    }
});

// 🧭 Obtener datos del usuario logueado
router.get("/me", async(req, res) => {
    try {
        const token = req.headers.authorization ?
            req.headers.authorization.split(" ")[1] :
            null;

        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const result = await pool.query(
            "SELECT id_usuario, nombre, correo FROM usuarios WHERE id_usuario = $1", [decoded.id_usuario]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        res.json({ usuario: result.rows[0] });
    } catch (error) {
        console.error("❌ Error al obtener perfil:", error);
        res.status(500).json({ error: "Error al obtener perfil del usuario" });
    }
});

export default router; // ✅ SIEMPRE AL FINAL