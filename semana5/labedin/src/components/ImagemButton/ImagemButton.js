import React from 'react';
import './ImagemButton.css';
import Daniel from "../img/daniel.jpg"
function ImagemButton(props) {
    return (
        <div className="image-button-container">
            <img src={ props.imagem }/>
            <p>{ props.texto }</p>
            
        </div>

    )
}

export default ImagemButton;
