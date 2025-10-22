import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./Header.css";
import userIcon from "../assets/person-circle-outline.svg";

function Header({userProfile = userIcon}) {
    return (
        <header className="header-container">
            <h1 className="logo-tittle">Plantec</h1>
            <Link to="/perfil"><img src={userProfile} alt="userProfile" /></Link>
        </header>
    );
}

export default Header;