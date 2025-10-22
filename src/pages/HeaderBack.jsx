import { Link } from "react-router-dom";
import userIcon from "../assets/person-circle-outline.svg";
import arrowBack from "../assets/arrow-back-outline.svg";
import "./HeaderBack.css";

function HeaderBack({userProfile = userIcon, text = "Plantec"}) {
    return (
        <header className="header-container">
            <div className="header-body">
                <Link to="/"><img src={arrowBack} alt="Back Arrow" /></Link>
                <h3>{text}</h3>
            </div>
            <Link to="/perfil"><img src={userProfile} alt="userProfile" /></Link>
        </header>
    );
}

export default HeaderBack;