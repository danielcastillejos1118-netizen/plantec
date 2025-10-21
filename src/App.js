import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Tareas from "./pages/Tasks"; // asegúrate de que el archivo se llame igual
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";

function App() {
    return ( 
        <div> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
    );
}

export default App;