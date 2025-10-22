import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Chatbot.css";
import axios from "axios";

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        setMessages([
            {
                sender: "bot",
                text: "👋 ¡Hola! Soy PlantecBot. ¿En qué puedo ayudarte hoy?",
            },
        ]);
    }, []);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { sender: "user", text: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");

        try {
            const response = await axios.post("http://localhost:5000/api/chatbot/ask", {
                pregunta: input,
            });

            const botMessage = {
                sender: "bot",
                text: response.data.respuesta || "No tengo una respuesta registrada aún 🤔",
            };
            setMessages((prev) => [...prev, botMessage]);
        } catch (error) {
            console.error("Error de conexión:", error);
            setMessages((prev) => [
                ...prev,
                { sender: "bot", text: "⚙️ Error de conexión con el servidor." },
            ]);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") sendMessage();
    };

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <Link to="/home" className="back-home">← Chatbot Plantec</Link>
            </div>

            <div className="chatbot-messages">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="chatbot-input">
                <input
                    type="text"
                    placeholder="Escribe tu pregunta..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button onClick={sendMessage}>Enviar</button>
            </div>
        </div>
    );
}

export default Chatbot;
