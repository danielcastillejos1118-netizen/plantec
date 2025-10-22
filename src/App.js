import { Routes, Route } from "react-router-dom";
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
import "./App.css";

function App() {
    const postId = 1; // Example post ID

    return ( <
        div >
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
        /Routes> <
        /div>
    );
}

export default App;