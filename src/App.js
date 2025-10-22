import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Perfil from "./pages/Perfil";
import Comunidades from "./pages/Comunidades";
import Tareas from "./pages/Tasks";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Post from "./pages/PostReadElement";
import PostElement from "./pages/PostElement";
import Chatbot from "./pages/Chatbot";
import CreatePost from "./pages/CreatePost";
import "./App.css";

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const location = useLocation();

    // Detectar si el usuario tiene sesión
    useEffect(() => {
        const token = localStorage.getItem("token");
        setIsAuthenticated(!!token);
    }, [location]);

    // Rutas donde no queremos mostrar la navbar
    const noNavbarRoutes = ["/", "/login", "/signup"];

    const shouldShowNavbar =
        isAuthenticated && !noNavbarRoutes.includes(location.pathname);

    return ( <
        div > { shouldShowNavbar && < Navbar / > }

        <
        Routes >
        <
        Route path = "/"
        element = { < Login / > }
        /> <
        Route path = "/login"
        element = { < Login / > }
        /> <
        Route path = "/signup"
        element = { < SignUp / > }
        /> <
        Route path = "/perfil"
        element = { < Perfil / > }
        /> <
        Route path = "/comunidades"
        element = { < Comunidades / > }
        /> <
        Route path = "/tareas"
        element = { < Tareas / > }
        /> <
        Route path = "/home"
        element = { < Home / > }
        /> <
        Route path = "/post/:id"
        element = { < Post / > }
        /> <
        Route path = "/postelement"
        element = { < PostElement / > }
        /> <
        Route path = "/chatbot"
        element = { < Chatbot / > }
        /> <
        Route path = "/create-post"
        element = { < CreatePost / > }
        /> <
        /Routes> <
        /div>
    );
}

export default App;