import { Card } from "./styled";
import React from "react"

const CardFeedPage = (props) => {

    return (

        <Card onClick={props.onClick}>

            <h1>
                {props.titulo}
            </h1>
            <h4>
                {props.texto}
            </h4>
            <p>
               Nome: {props.name}
            </p>
            <p>
                {props.user}
            </p>
            <p>
                Comentários:{props.comentario}
            </p>
            <p>
                {props.vote}
            </p>
          
        </Card >



    );

}
export default CardFeedPage


