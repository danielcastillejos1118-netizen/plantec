import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Perfil from "./pages/Perfil"; 
import Comunidades from "./pages/Comunidades";
import Tareas from "./pages/Tasks"; 
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import './App.css';

function App() {
    return ( 
        <div> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} /> 
            <Route path="/signup" element={<SignUp />} />
            <Route path="/perfil" element={<Perfil />} /> 
           <Route path="/comunidades" element={<Comunidades />} /> 
          </Routes>
        </div>
    );

}

export default App;