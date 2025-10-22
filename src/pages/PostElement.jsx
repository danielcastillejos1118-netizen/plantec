import { Link, useLocation, useNavigate } from 'react-router-dom';
import React from "react";
import UserIcon from "../assets/person-circle-outline.svg";
import LikeICon from "../assets/heart-outline.svg";
import CommentIcon from "../assets/chatbubble-outline.svg";
import backIcon from "../assets/arrow-back-outline.svg"; // 👈 asegúrate de tener este ícono
import "./PostElement.css";

function PostElement({
    id,
    imgUser = UserIcon,
    userName = "Usuario Anónimo",
    date = "01/01/2024",
    tittle = "Título del Post",
    body = "Lorem ipsum dolor sit amet...",
    likes = 0,
    comments = 0,
    category = "General",
}) {
    const dateFormat = `• ${date}`;
    const location = useLocation();
    const navigate = useNavigate();
    const isDetailPage = location.pathname === `/post/${id}`;
    const postBodyClass = isDetailPage ? "post-body-text" : "post-body-text-truncate";
    const postData = { id, imgUser, userName, date, tittle, body, likes, comments, category };

    return (
        <section className="post-element">
            {/* 🔹 Botón de regreso visible solo en detalle */}
            {isDetailPage && (
                <button className="back-button" onClick={() => navigate("/home")}>
                    <img src={backIcon} alt="Regresar" />
                </button>
            )}

            <Link
                to={isDetailPage ? "#" : `/post/${id}`}
                className="post-link-wrapper"
                state={{ postDetails: postData }}
            >
                <div className="post-container">
                    <div className="post-content">
                        <div className="post-content-info-user">
                            <img src={imgUser} alt="User Icon" />
                            <div className="info-user-text">
                                <p className="user-name">{userName}</p>
                                <p className="post-date">{dateFormat}</p>
                            </div>
                        </div>
                        <div className="post-content-body">
                            <h2 className="post-tittle">{tittle}</h2>
                            <p className={postBodyClass}>{body}</p>
                        </div>
                    </div>

                    <div className="post-bottom">
                        <div className="post-interactions">
                            <div className="post-likes">
                                <img src={LikeICon} alt="Like Icon" />
                                <p>{likes}</p>
                            </div>
                            <div className="post-comments">
                                <img src={CommentIcon} alt="Comment Icon" />
                                <p>{comments}</p>
                            </div>
                        </div>
                        <div className="post-category">
                            <p>{category}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </section>
    );
}

export default PostElement;
