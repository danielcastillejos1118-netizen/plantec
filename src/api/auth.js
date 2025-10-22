import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

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
export const loginUser = async(credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        if (error.response && error.response.data) {
            throw error.response.data;
        } else {
            throw { error: "Error al iniciar sesión" };
        }
    }
};