import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Perfil from "./pages/Perfil"; 

import Comunidades from "./pages/Comunidades";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/perfil" element={<Perfil />} /> 
        <Route path="/comunidades" element={<Comunidades />} /> 
      </Routes>
    </Router>
  );
}

export default App;