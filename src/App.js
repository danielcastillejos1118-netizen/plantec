import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Tareas from "./pages/Tasks"; // asegúrate de que el archivo se llame igual

function App() {
    return ( <
        Router >
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
        Route path = "/tasks"
        element = { < Tareas / > }
        /> <
        /Routes> <
        /Router>
    );
}

export default App;