import React from 'react';
import './Footer.css';
function Footer (props) {
    return (
        <div className="footer">
            <img src={props.imagem} />
            <h3>{props.nome}</h3>
        </div>
    )
}
export default Footer;
