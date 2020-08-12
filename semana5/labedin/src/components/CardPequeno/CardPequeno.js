import React from 'react';
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className="bigcard-container">
             <img src={props.imagem} />
             <div>
               <h4>{props.nome}</h4>
            </div>
              <img src={props.imagem1} /> 
            <div>
              
               <p>{props.descricao}</p>  
            </div>
        </div>
    )
}
export default CardPequeno;
