import React, { useState, useEffect } from 'react';
import { NavBarConfig,LogoConfig,Botao,Botao2 } from "./NAVBAR/styled"



export default function NavBar(props) {
    return (
        <NavBarConfig>
          <Botao onClick={props.back} hidden>Voltar</Botao> 
            <LogoConfig src={props.imagem}></LogoConfig>
            <Botao2 onClick={props.Add}>Matches</Botao2>
        </NavBarConfig>
    )
}