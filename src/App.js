import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Perfil from "./pages/Perfil";
import Comunidades from "./pages/Comunidades";
import Tareas from "./pages/Tasks";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Post from "./pages/PostReadElement";
import './App.css';
import Tasks from "./pages/Tasks";
import PostElement from "./pages/PostElement";
import Chatbot from "./pages/Chatbot";


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
        />  <
        Route path = "/signup"
        element = { < SignUp / > }
        /> <
        Route path = "/perfil"
        element = { < Perfil / > }
        />  <
        Route path = "/comunidades"
        element = { < Comunidades / > }
        />  <
        Route path = "/Home"
        element = { < Home / > }
        />  <
        Route path = "/Perfil"
        element = { < Perfil / > }
        />  <
        Route path = "/Tareas"
        element = { < Tasks / > }
        />  <
        Route path = "/crear"
        element = { < PostElement / > }
        />  <
        Route path = "/Chatbot"
        element = { < Chatbot / > }
        /> <
        Route path = { `/post/${postId}` }
        element = { < Post / > }
        />  < /
        Routes > <
        /div>
    );

}

export default App;