import axios from "axios";

const API_URL = "https://plantec-backend.onrender.com/api/auth";

// Registrar usuario
export const registerUser = async(userData) => {
    try {
        const response = await axios.post(`${API_URL}/register`, userData);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw error.response.data;
        } else {
            throw { error: "Error al registrar usuario" };
        }
    }
};

// Iniciar sesión
export const loginUser = async(credenciales) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credenciales),
    });

    if (!response.ok) throw new Error("Error al iniciar sesión");
    return await response.json();
};