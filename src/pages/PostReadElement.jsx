import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useLocation, useParams } from 'react-router-dom';
import Post from "./PostElement";
import Navbar from "./Navbar";
import HeaderBack from "./HeaderBack";
import { Fragment } from "react";

function PostReadElement(){
    const location = useLocation();
    const { id } = useParams(); // Para obtener el ID de la URL
    
    // Intenta obtener los detalles del post del estado de navegación
    const postDetails = location.state?.postDetails; 

    if (!postDetails) {
        // Si no hay datos en el estado (ej. el usuario entró directamente por la URL),
        // debes hacer una llamada a la API aquí usando el 'id'
        return <div>Cargando o Post no encontrado...</div>; 
    }

    return (
        <Fragment>
            <div className="post-read-container">
                <HeaderBack text="Publicación" />
                <Post 
                    id={postDetails.id}
                    imgUser={postDetails.imgUser}
                    userName={postDetails.userName}
                    date={postDetails.date}
                    tittle={postDetails.tittle}
                    body={postDetails.body}
                    likes={postDetails.likes}
                    comments={postDetails.comments}
                    category={postDetails.category}
                />
            </div>
            <Navbar />
        </Fragment>
    );
};

export default PostReadElement;