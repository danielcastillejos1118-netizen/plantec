import { Link } from "react-router-dom";
import React, { useState } from "react";
import UserIcon from "../assets/person-circle-outline.svg";
import LikeICon from "../assets/heart-outline.svg";
import CommentIcon from "../assets/chatbubble-outline.svg";
import "./PostElement.css";

function PostElement({
    imgUser = UserIcon, 
    userName = "Usuario Anónimo", 
    date = "01/01/2024", 
    tittle = "Título del Post", 
    body = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra nunc porttitor, tincidunt sem eget, ultricies ipsum. Donec dui purus, vulputate at rhoncus in, sollicitudin nec orci. Nullam eleifend erat tristique neque congue varius. Nullam a rhoncus tortor. Ut lobortis nisl non dolor vehicula dapibus. Integer nisi est, hendrerit pharetra nulla ac, consectetur ornare justo. Praesent et libero vitae mi sodales imperdiet. Aliquam erat volutpat.",
    likes = 0, 
    comments = 0, 
    category = "General"
}){
    const dateFormat = `• ${date}`;
    
    return (
        <section className="post-element">
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
                        <p className="post-body-text">{body}</p>
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
        </section>
    );
}

export default PostElement;